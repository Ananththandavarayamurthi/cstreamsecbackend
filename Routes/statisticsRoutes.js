const express = require('express');
const router = express.Router();
const Reimbursement = require('../schema/reimbursement');


// Get organization-wide statistics
router.get('/', async (req, res) => {
  try {
    const totalAmountSpent = await Reimbursement.aggregate([
      { $group: { _id: null, totalAmountSpent: { $sum: '$amount' } } },
    ]);
    
    const pendingReimbursements = await Reimbursement.countDocuments({ status: 'pending' });
    const settledReimbursements = await Reimbursement.countDocuments({ status: 'approved' });
    const rejectedReimbursements = await Reimbursement.countDocuments({ status: 'rejected' });

    const statistics = {
      totalAmountSpent: totalAmountSpent[0]?.totalAmountSpent || 0,
      pendingReimbursements,
      settledReimbursements,
      rejectedReimbursements,
    };

    res.json(statistics);
  } catch (error) {
    console.log("error",error)
    res.status(500).json({ message: 'Error fetching organization-wide statistics', error: error.message });
  }
});

module.exports = router;

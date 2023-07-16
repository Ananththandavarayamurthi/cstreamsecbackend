const Reimbursement = require('../schema/reimbursement');

// Create a new reimbursement
exports.createReimbursement = async (req, res) => {
  try {
    const reimbursement = await Reimbursement.create(req.body);
    res.status(201).json(reimbursement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all reimbursements
exports.getAllReimbursements = async (req, res) => {
  try {
    const reimbursements = await Reimbursement.find();
    res.json(reimbursements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update reimbursement status (approve/reject)
exports.updateReimbursement = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const reimbursement = await Reimbursement.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.json(reimbursement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a reimbursement
exports.deleteReimbursement = async (req, res) => {
  try {
    const { id } = req.params;
    await Reimbursement.findByIdAndDelete(id);
    res.json({ message: 'Reimbursement deleted successfully.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

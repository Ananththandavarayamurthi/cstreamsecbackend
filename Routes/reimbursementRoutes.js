const express = require('express');
const router = express.Router();
const reimbursementController = require('../controler/reimbersementcontrollers');

router.post('/', reimbursementController.createReimbursement);
router.get('/', reimbursementController.getAllReimbursements);
router.put('/:id', reimbursementController.updateReimbursement);
router.delete('/:id', reimbursementController.deleteReimbursement);

module.exports = router;

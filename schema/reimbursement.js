const mongoose = require('mongoose');

const reimbursementSchema = new mongoose.Schema({
  typeOfExpense: { type: String, required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  // Add other relevant fields for the reimbursement
});

const Reimbursement = mongoose.model('Reimbursement', reimbursementSchema);

module.exports = Reimbursement;

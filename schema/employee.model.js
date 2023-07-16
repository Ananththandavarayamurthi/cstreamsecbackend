const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add other relevant fields for the employee
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

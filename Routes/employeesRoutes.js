const express = require('express');
const router = express.Router();
const employeeController = require('../controler/employerscontrolers');

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);

module.exports = router;
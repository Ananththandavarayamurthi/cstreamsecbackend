const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

const connectDB =require("./db/db")
const reimbursementRoutes = require('./Routes/reimbursementRoutes');
const employeeRoutes = require('./Routes/employeesRoutes');
const statisticsRoutes = require('./Routes/statisticsRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB()
// Use the API routes

app.use('/api/statistics', statisticsRoutes);
app.use('/api/reimbursements', reimbursementRoutes);
app.use('/api/employees', employeeRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

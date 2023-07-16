import React, { useState } from 'react';
import axios from 'axios';

const ReimbursementForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    date: '',
    person: '',
    amount: '',
    invoiceId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/reimbursements', formData);
      alert('Reimbursement submitted successfully!');
    } catch (error) {
      console.error('Failed to submit reimbursement', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Reimbursement form fields */}
      <button type="submit">Submit Reimbursement</button>
    </form>
  );
};

export default ReimbursementForm;

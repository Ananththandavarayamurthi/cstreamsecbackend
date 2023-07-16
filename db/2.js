import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReimbursementList = () => {
  const [reimbursements, setReimbursements] = useState([]);

  useEffect(() => {
    const fetchReimbursements = async () => {
      try {
        const response = await axios.get('/api/reimbursements');
        setReimbursements(response.data);
      } catch (error) {
        console.error('Failed to fetch reimbursements', error);
      }
    };

    fetchReimbursements();
  }, []);

  return (
    <div>
      {/* Display the list of reimbursements */}
    </div>
  );
};

export default ReimbursementList;

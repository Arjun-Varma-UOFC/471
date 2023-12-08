import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OSTDetails from '../entities/soundtrack/ost.details';
import { useParams } from 'react-router-dom';

const OSTPage = () => {
  const {ostId} = useParams();
  const [ost, setOst] = useState(null);
 
  useEffect(() => {
    const fetchOSTDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/ost/${ostId}`);
        console.log('API ost data fetched from back end:', response.data);
        setOst(response.data.ost);
      } catch (error) {
        console.error('Error fetching ost details:', error);
      }
    };

    console.log('Fetching ost details...');
    fetchOSTDetails();
  }, [ostId]);

  return (
    <div>
      <h1>OST Details</h1>
      <OSTDetails ost = {ost} />
    </div>
  );
};

export default OSTPage;

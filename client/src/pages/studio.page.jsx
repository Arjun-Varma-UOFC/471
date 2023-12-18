import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudioDetails from '../entities/studio/studio.details';
import StudioProductions from '../entities/studio/studio.films';
import { useParams } from 'react-router-dom';

const StudioPage = () => {
  const {studioId} = useParams();
  const [studio, setStudio] = useState(null);
 
  useEffect(() => {
    const fetchStudioDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/studio/${studioId}`);
        //console.log('API ost data fetched from back end:', response.data);
        setStudio(response.data.studio);
      } catch (error) {
        console.error('Error fetching studio details:', error);
      }
    };

    fetchStudioDetails();
  }, [studioId]);

  return (
    <div>
      <h1>Studio Details</h1>
      <StudioDetails studio={studio} />
      <StudioProductions studioId={studioId} />
    </div>
  );
};

export default StudioPage;

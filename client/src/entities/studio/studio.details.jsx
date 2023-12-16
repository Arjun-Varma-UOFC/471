import React from 'react';
//import { Link } from 'react-router-dom';

const StudioDetails = ({ studio }) => {
  if (!studio) console.log("Studio data is null");
  else{
    console.log(studio)
  }

  return studio ? ( 
    <div>
      <h2>{studio.SName}</h2>
      <p>Founded in year: {studio.Year}</p>
      <p>{studio.Bio}</p>

    </div>
  ) : (
    <p>Loading studio details...</p>
  );
};

export default StudioDetails;

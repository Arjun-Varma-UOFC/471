import React from 'react';

const OSTDetails = ({ ost }) => {
  if (!ost) console.log("OST data is null");
  else{
    console.log(ost)
  }

  return ost ? ( 
    <div className>
      <h2>{ost.Title}</h2>
    </div>
  ) : (
    <p>Loading soundtrack details...</p>
  );
};

export default OSTDetails;

import React from 'react';
import { Link } from 'react-router-dom';

const OSTDetails = ({ ost }) => {
  if (!ost) console.log("OST data is null");
  else{
    console.log(ost)
  }

  return ost ? ( 
    <div className>
      <h2>{ost.Title}</h2>
      <Link to={`/actor/${ost.CID}`}>
          <p>Composer: {ost.Name} </p>
      </Link>
    </div>
  ) : (
    <p>Loading soundtrack details...</p>
  );
};

export default OSTDetails;

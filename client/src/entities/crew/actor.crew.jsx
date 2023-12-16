import React from 'react';
//import "../styles/actor-details.css"; 

const ActorDetails = ({ actor }) => {
  if (!actor) console.log("Actor data is null");
  else{
    console.log(actor)
  }

  return actor ? (
    <div>
      
      <div style={{ display: 'flex' }}>
        <img src={actor.Poster_URL} alt="Actor" style = {{maxWidth: '150px'}} />
      </div>
      
      <div style={{ marginLeft: '20px' }}>
        <h2>{actor.Name}</h2>
        <p><strong>Date of birth:</strong> {actor.DOB}</p>
        <p><strong>Short bio:</strong> {actor.Bio}</p>
      </div>  
      
      
    </div>
  ) : (
    <p>Loading actor details...</p>
  );
};

export default ActorDetails;

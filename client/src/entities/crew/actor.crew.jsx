import React from 'react';
//import "../styles/actor-details.css"; 

const ActorDetails = ({ actor }) => {
  if (!actor) console.log("Actor data is null");
  else{
    console.log(actor)
  }

  return actor ? (
    <div className="actor-details-container">
      <h2>{actor.Name}</h2>
      <p><strong>Education:</strong> {actor.education}</p>
      <p><strong>Date of birth:</strong> {actor.DOB}</p>
      <p><strong>Short bio:</strong> {actor.Bio}</p>
      <p><strong>Awards:</strong> {actor.Awards}</p>
    </div>
  ) : (
    <p>Loading actor details...</p>
  );
};

export default ActorDetails;

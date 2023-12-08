import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ActorDetails from '../entities/crew/actor.crew';

const ActorPage = ({ actorId }) => {
  const [actor, setActor] = useState(null);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/actor/${actorId}`);
        console.log('API Actor data:', response.data.actor);

        setActor(response.data.actor);
      } catch (error) {
        console.error('Error fetching actor details:', error);
      }
    };

    console.log('Fetching actor details...');
    fetchActorDetails();
  }, [actorId]);

  return (
    <div>
      <h1>Actor Details</h1>
      <ActorDetails actor={actor} />
    </div>
  );
};

export default ActorPage;

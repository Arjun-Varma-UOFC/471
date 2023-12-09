import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AwardDetails = ({ actorId }) => {
const [awards, setAwards] = useState('');
  if (!actorId) console.log("Actor data is null");
  else{
    console.log(actorId)
  }
  useEffect(() => {
    const fetchAwardDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/awards/${actorId}`);
        setAwards(response.data.awards)}
        catch (error) {console.error('Error for awards:', error);}
        };

        fetchAwardDetails();
    })

  return awards ? (
    <div className="awards-details-container">
      <strong>Awards:</strong>
      <ul>
          {awards.map((a) => (
            <li key={a.CID}>
                <p>Award: {a.Name}</p>
                <p>Year Received: {a.Year}</p>
            
            </li>
          ))}
        </ul>
      
    </div>
  ) : (
    <p></p>
  );
};

export default AwardDetails;

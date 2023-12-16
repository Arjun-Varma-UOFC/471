import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudioProductions = ({ studioId }) => {
const [films, setFilms] = useState('');
  if (!studioId) console.log("Studio id is null");
  else{
    console.log(studioId)
  }
  useEffect(() => {
    const fetchFilmsDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/studio-films/${studioId}`);
        setFilms(response.data.films)}
        catch (error) {console.error('Error from studio films:', error);}
        };

        fetchFilmsDetails();
    })

  return films ? (
    <div className="films-details-container">
      <strong>Filmography:</strong>
      <ul>
          {films.map((a) => (
            <li key={a.MID}>
                <Link to={`/movies/${a.MID}`}>
                  <p>Movie: {a.Title}</p>
                </Link>
            </li>
          ))}
        </ul>
      
    </div>
  ) : (
    <p></p>
  );
};

export default StudioProductions;

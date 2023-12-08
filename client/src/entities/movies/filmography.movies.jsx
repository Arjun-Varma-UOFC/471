import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FilmographyDetails = ({ actorId }) => {
const [films, setFilms] = useState('');
  if (!actorId) console.log("Actor data is null");
  else{
    console.log(actorId)
  }
  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/filmography/${actorId}`);
        setFilms(response.data.films)}
        catch (error) {console.error('Error for filmography:', error);}
        };

        fetchFilmDetails();
    })

  return films ? (
    <div className="film-details-container">
      <strong>Filmography:</strong>
      <ul>
          {films.map((film) => (
            <li key={film.MID}>
              <Link to={`/movies/${film.MID}`}>
                <p>Movie: {film.Title}</p>
                <p>Role: {film.Role}</p>
              </Link>
            
            </li>
          ))}
        </ul>
      
    </div>
  ) : (
    <p>Loading filmography details...</p>
  );
};

export default FilmographyDetails;

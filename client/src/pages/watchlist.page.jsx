import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MovieCard = ({ movie }) => (
    <Link to={`/movies/${movie.MID}`} key={movie.MID}>
      <div className="index-movie-card">
        <img src={movie.Poster} alt={movie.Title} className="index-movie-poster" />
        <div className="index-movie-details">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    </Link>
  );

const WatchlistPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/watchlist');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Your Watchlist: </h2>
      {movies.map((movie) => (
       <div key={movie.MID} className="index-movie-card">
         <MovieCard movie={movie} />
     </div>
      ))}
    </div>
  );
};

export default WatchlistPage;

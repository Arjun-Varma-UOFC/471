import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/index.page.css';

const MovieCard = ({ movie }) => (
  <Link to={`/movies/${movie.id}`} key={movie.id}>
    <div className="index-movie-card">
      <img
        src={movie.poster_url}
        alt={movie.title}
        className="index-movie-poster"
      />
      <div className="index-movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </div>
    </div>
  </Link>
);


const WelcomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="welcome-container">
      <h2 className="welcome-text">Welcome to MovieLand!</h2>

      {/* Add Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setSearchQuery('')}>Clear</button>
      </div>

      <div className="index-movie-grid">
        {searchQuery === '' ? (
          // Display all movies when search query is empty
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          // Display filtered movies based on search query
          filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default WelcomePage;

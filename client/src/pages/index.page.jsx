import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CrewReviewList from '../entities/reviews/list.crew-reviews';
import ReviewList from '../entities/reviews/list.reviews';
import '../styles/index.page.css';

const MovieCard = ({ movie }) => (
  <Link to={`/movies/${movie.id}`} key={movie.id}>
    <div className="index-movie-card">
      <img src={movie.poster_url} alt={movie.title} className="index-movie-poster" />
      <div className="index-movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </div>
    </div>
  </Link>
);

const WelcomePage = () => {
  const [movies, setMovies] = useState([]);
  const [networkReviews, setNetworkReviews] = useState([]);
  const [networkCrewReviews, setNetworkCrewReviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/movies');
        setMovies(response.data);

        const res = await axios.get('http://localhost:3001/api/network-reviews');
        setNetworkReviews(res.data.reviews);
        setNetworkCrewReviews(res.data.crewReviews);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    // Update visible movies when search query changes
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setVisibleMovies(filteredMovies);
    setCurrentIndex(0); // Reset index when search query changes
  }, [searchQuery, movies]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
  };


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4 < visibleMovies.length ? prevIndex + 4 : prevIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 >= 0 ? prevIndex - 4 : 0));
  };

  return (
    <div className="welcome-container">
       <div className="top-right-buttons">
          <Link to="/watchlist">My Watchlist</Link>
          <Link to= "/">
            <button onClick = {() => handleLogout()}>Logout</button>
          </Link>
      </div>

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

      {/* Display visible movies with navigation arrows */}
      <div className="index-movie-grid">
        {visibleMovies.slice(currentIndex, currentIndex + 4).map((movie) => (
          <div key={movie.id} className="index-movie-card">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="navigation-arrows">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          &lt; 
        </button>
        <button onClick={handleNext} disabled={currentIndex + 4 >= visibleMovies.length}>
          &gt;
        </button>
      </div>
     
      <div>
        <p>Your Critics recently post: </p>
        <ReviewList reviews={networkReviews}/>
        <CrewReviewList reviews={networkCrewReviews} />
      </div>
          
    </div>
  );
};

export default WelcomePage;

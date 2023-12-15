import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReviewList from '../entities/reviews/list.reviews';

const CriticDetails = ({ userId, reviews }) => {
  const [critic, setCritic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [year, setYear] = useState('')
  const [isFollowing, setIsFollowing] = useState(false);
  const [compatibility, setCompatibility] = useState(null);

  const fetchCompatibility = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/compatibility/${userId}`);
      setCompatibility(response.data.compatibility);
    } catch (error) {
      console.error('Error fetching compatibility:', error);
    }
  };

  useEffect(() => {
    const fetchCriticDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/critic/${userId}`);
        setCritic(response.data.critic);
      } catch (error) {
        console.error('Error fetching critic details:', error);
      }
    };

    fetchCriticDetails();
  }, [userId]);

  const fetchMovieName = async (movieId) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/movie-name/${movieId}`);
      return response.data.title;
    } catch (error) {
      console.error('Error fetching movie name:', error);
      return 'Unknown';
    }
  };

  const updateReviewsWithMovieTitles = async () => {
    const updatedReviews = await Promise.all(
      reviews.map(async (review) => {
        const movieTitle = review.MID ? await fetchMovieName(review.MID) : 'Unknown';
        return { ...review, movie_title: movieTitle };
      })
    );
    return updatedReviews;
  };

  const handleSearch = async () => {
    const updatedReviews = await updateReviewsWithMovieTitles();

    // Ensure reviews is an array before applying filter
    const filteredReviews = Array.isArray(updatedReviews)
      ? updatedReviews.filter((review) =>
          review.title && review.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

    return filteredReviews;
  };

  const followCritic = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/api/follow/${userId}`);
      setIsFollowing(true); // Update the state to indicate that the user is following
      console.log(res);
    } catch (error) {
      console.error('Error following someone HAHA =) :', error);
    }
  };

  return (
    <div className="critic-details-container">
      <h2>Name: {critic?.Name}</h2>
      <h2>Company: {critic?.Company}</h2>
      <button onClick={fetchCompatibility}>View Compatibility</button>

        {/* Display Compatibility */}
        {compatibility !== null && (
          <div>
            <h3>Compatibility: {compatibility}</h3>
          </div>
        )}
        
      <Link to={`/popular-review/${critic?.UID}`}>
        <button>View Popular Review</button>
      </Link>

      <Link to={`/yearend/${year}/${critic?.UID}`}>
        <button disabled={year === ''}>View Yearend List</button>
      </Link>

      <div className="year-input-container">
        <input
          type="text"
          placeholder="Enter year..."
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      {/* Display Follow or Following button based on the state */}
      {isFollowing ? (
        <button disabled>Following</button>
      ) : (
        <button onClick={() => followCritic()}>Follow</button>
      )}

      {/* Add Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Display Reviews */}
      <ReviewList reviews={searchQuery === '' ? reviews : handleSearch()} />
    </div>
  );
};

export default CriticDetails;

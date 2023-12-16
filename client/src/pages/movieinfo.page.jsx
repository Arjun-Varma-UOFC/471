import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReviewList from '../entities/reviews/list.reviews';
import CharList from '../entities/character/cast.movie';
import OSTList from '../entities/movies/ost.movie';
import Screenings from '../entities/screening/screening.movie';
import StudioList from '../entities/studio/studio.list';
import axios from 'axios';
import "../styles/movieinfo.page.css"

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState({});
  const [cast, setCast] = useState({});
  const [shows, setShows] = useState([]);
  const [ost, setOst] = useState([]);
  const [studios, setStudios] = useState([]);
  const [reviewText, setReviewText] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/movies/${movieId}`);
        console.log('API studios data:', response.data.studios);

        setReviews(response.data.reviews)
        setCast(response.data.cast)
        setMovie(response.data.movie);
        setOst(response.data.ost);
        setShows(response.data.shows)
        setStudios(response.data.studios)

      } catch (error) {
        console.error('Error fetching movie details:', error);
      }

    };

    console.log('Fetching movie details...');
    fetchMovieDetails();

  }, [movieId]);
  
const addToWatchlist = async () =>{
  try {
    const response = await axios.post(`http://localhost:3001/api/movies/${movieId}/addToWatchlist/`);
    console.log("Response from backend: ", response)

  } catch (error) {
    console.error('Error adding to watchlist', error);
  }
}

const submitReview = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/api/movies/${movieId}/submit-review`, {
        reviewText: reviewText,
        rating: selectedRating,
      });

      console.log("Submitted review: ", response)

      const updatedResponse = await axios.get(`http://localhost:3001/api/movies/${movieId}`);
      setReviews(updatedResponse.data.reviews);
      setSelectedRating(null); //set to null after review submission

    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div>
      {movie ? (
        <div className="movie-details-container">
        <img src={movie.Poster} alt={movie.Title} className="movie-details-poster" />
  
        <div className="movie-info-details">
          <h2 className="movie-info-title">{movie.Title}</h2>
          <Link to={`/actor/${movie.Director}`}>
            <p className="movie-info">Director: {movie.Name} </p>
          </Link>
          <p className="movie-info">Summary: {movie.Summary}</p>
  
          <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="rating-dropdown"
        >
          <option value="" disabled>Select Rating</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>

        {selectedRating && (
          <>
            <textarea
              placeholder="Write your review here"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="review-textarea"
            ></textarea>
            <button onClick={submitReview} className="button">
              Submit Review
            </button>
          </>
        )}

          <button onClick={addToWatchlist} className="button">
            Add to Watchlist
          </button>

          <ReviewList reviews={reviews} />
          <CharList cast = {cast} />
          <StudioList studios={studios}/>
          <OSTList ost = {ost} />
          <Screenings shows = {shows} />
        </div>
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;

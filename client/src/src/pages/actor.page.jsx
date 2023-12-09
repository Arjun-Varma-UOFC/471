import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ActorDetails from '../entities/crew/actor.crew';
import { useParams } from 'react-router-dom';
import CrewReviewList from '../entities/reviews/list.crew-reviews';
import FilmographyDetails from '../entities/movies/filmography.movies';
import AwardDetails from '../entities/crew/awards.crew';
import "../styles/actor.page.css"

const ActorPage = () => {
  const {actorId} = useParams();
  const [actor, setActor] = useState(null);
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState('');
  const [isReviewEnabled, setIsReviewEnabled] = useState(false)

  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value, 10);
    setRating(selectedRating);
    setIsReviewEnabled(selectedRating > 0); // Enable review if a rating is selected
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = () => {
    // Use axios to send data to the server
    axios.post('http://localhost:3001/api/review/crew', { actorId, rating, review });

    // Reset state after submission
    setRating(1);
    setReview('');
    setIsReviewEnabled(false);
  };

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/actor/${actorId}`);
        console.log('API Actor data:', response.data.actor);

        setActor(response.data.actor);
        setReviews(response.data.review)
      } catch (error) {
        console.error('Error fetching actor details:', error);
      }
    };

    console.log('Fetching actor details...');
    fetchActorDetails();
  }, [actorId]);

  return (
    <div className= "actor-page-container">
      <h1>Actor Details</h1>

      <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column' }}>
        <ActorDetails actor={actor} />
        <AwardDetails actorId={actorId} />
        <FilmographyDetails actorId = {actorId}/>

      <label>
        Select Rating:
        <select value={rating} onChange={handleRatingChange}>
          {[1, 2, 3, 4, 5].map((option) => (
            <option key={option} value={option}>
              {option} stars
            </option>
          ))}
        </select>
      </label>

      <CrewReviewList reviews={reviews}/>

      {isReviewEnabled && (
        <div>
          <label>
            Write a Review:
            <textarea value={review} onChange={handleReviewChange} />
          </label>

          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
       </div>
    </div>
  );
};

export default ActorPage;

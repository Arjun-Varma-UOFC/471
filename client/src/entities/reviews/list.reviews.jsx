import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews }) => {
  const approvedReviews = Array.isArray(reviews) ? reviews.filter((review) => review.approved === 1) : [];
  const [disabledButtonsMap, setDisabledButtonsMap] = useState({});

  const handleLike = async (reviewID, index) => {
    try {
      if (disabledButtonsMap[reviewID]) {
        return; // Do nothing if the button is disabled
      }

      // Update the likes in the database
      const response = await axios.post(`http://localhost:3001/api/reviews/${reviewID}/like`);

      if (response.data.review) {
        // Log the response to check if it contains the updated review
        console.log('Updated review response:', response.data);

        // Update the likes count directly in the local state
        const updatedLikes = [...approvedReviews];
        updatedLikes[index] = response.data.review.popularity;

        // Disable the button for the current review
        setDisabledButtonsMap((prevMap) => ({
          ...prevMap,
          [reviewID]: true,
        }));
      } else {
        console.error('Failed to update likes in the database');
      }
    } catch (error) {
      console.error('Failed to update likes:', error);
    }
  };

  if (approvedReviews.length === 0) {
    return <p>Be the first one to write the review!</p>;
  } else {
    return (
      <div className="review-list-container">
        <h3>Reviews</h3>
        <ul>
          {approvedReviews.map((review, index) => (
            <li key={review.RID}>
              <Link to={`/user/${review.UID}`}>
                <p>Movie: {review.Title || review.MID}</p>
                <p>
                  {review.user_name} gives <i><strong>{review.rating}</strong> stars</i>: {review.Description}
                </p>
              </Link>
              <button onClick={() => handleLike(review.RID, index)} disabled={disabledButtonsMap[review.RID]}>
                Like
              </button>
              <span>Likes: {review.popularity}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ReviewList;

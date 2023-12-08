import React from 'react';
import { Link } from 'react-router-dom'; 

const ReviewList = ({ reviews }) => {
  // Filter the reviews to only include those that are approved
  const approvedReviews = reviews.filter((review) => review.approved === 1);

  if (approvedReviews.length === 0) {
    return <p>Be the first one to write the review!</p>;
  } else {
    return (
      <div className="review-list-container">
        <h3>Reviews</h3>
        <ul>
          {approvedReviews.map((review) => (
            <Link to ={`/user/${review.UID}`}>
              <p>Movie: {review.MID}</p>
              <li key ={review.RID}>
                <p>{review.UID}: {review.Description}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
};

export default ReviewList;

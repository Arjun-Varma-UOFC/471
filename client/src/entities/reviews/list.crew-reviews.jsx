import React from 'react';
import { Link } from 'react-router-dom';

const CrewReviewList = ({ reviews }) => {
  const approvedReviews = Array.isArray(reviews) ? reviews.filter((review) => review.approved === 1) : []

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
                <p>Review for {review.Name}</p>
                <p>
                  {review.user_name} gives <i><strong>{review.rating}</strong> stars</i>: {review.Description}
                </p>
              </Link>
            
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default CrewReviewList;

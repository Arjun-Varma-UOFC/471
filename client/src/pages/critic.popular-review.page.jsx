import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from '../entities/reviews/list.reviews';
import { useParams } from 'react-router-dom';

const PopularReviewPage = () => {
    const {userId} = useParams();
    const [reviews, setReviews] = useState(null);
  
    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/popular-review/${userId}`);
  
          setReviews(response.data);
        } catch (error) {
          console.error('LAUGHING BECAUSE THERE IS AN ERROR:', error);
        }
      };
  
      fetchReviews();
    }, [userId]);
  
    return (
      <div>
        <h1>Popular Reviews: </h1>
        <ReviewList reviews={reviews} />
      </div>
    );
  };
  
  export default PopularReviewPage;
  
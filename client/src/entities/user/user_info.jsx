import React from 'react';
import ReviewList from '../reviews/list.reviews';

const UserDetails = ({ user, reviews}) => {
  if (!user) console.log("User data is null");
  else{
    console.log(user)
  }

  return user ? (
    <div className="user-details-container">
      <h2>Name: {user.user_name}</h2>
      <ReviewList reviews={reviews} />
    </div>
  ) : (
    <p>Loading user details...</p>
  );
};

export default UserDetails;

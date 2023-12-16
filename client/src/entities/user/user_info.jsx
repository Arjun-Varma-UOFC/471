import React from 'react';
import ReviewList from '../reviews/list.reviews';
import CriticDetails from '../critic/critic_info';

const UserDetails = ({ user, reviews }) => {
  if (!user) {
    console.log("User data is null");
    return <p>Loading user details...</p>;
  }

  console.log(user);

  if (user.critic) {
    return <CriticDetails userId={user.user_id} reviews={reviews} />;
  }

  return (
    <div className="user-details-container">
      <h2>Name: {user.user_name}</h2>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default UserDetails;

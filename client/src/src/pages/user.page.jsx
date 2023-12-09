import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserDetails from '../entities/user/user_info';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [userReview, setUReview] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${userId}`);
        setUser(response.data.userInfo);
        setUReview(response.data.reviews);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <div>
      <h1>User Details</h1>
      <UserDetails user={user} reviews={userReview} />
    </div>
  );
};

export default UserPage;

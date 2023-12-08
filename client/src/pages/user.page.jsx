import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserDetails from '../entities/user/user_info';
import { useParams } from 'react-router-dom'; // Import useParams

const UserPage = () => {
  const { userId } = useParams(); // Use useParams to get the userId from the URL
  const [user, setUser] = useState(null);
  const [userReview, setUReview] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${userId}`);
        console.log('API user data:', response.data.user);
        setUser(response.data.userInfo);
        console.log('API user review data: ', response.data.reviews);
        setUReview(response.data.reviews);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    console.log('Fetching user details...');
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

import React from 'react';
import axios from 'axios';

const AdminPage = () => {
  const handleAddItem = async (endpoint) => {
    try {
      const response = await axios.post(`/api/admin/${endpoint}`, { method: 'POST' });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleAddItem('add-movie')}>Add Movie</button>
      <button onClick={() => handleAddItem('add-soundtrack')}>Add Soundtrack</button>
      <button onClick={() => handleAddItem('add-critic')}>Add Critic</button>
      <button onClick={() => handleAddItem('add-crew')}>Add Crew</button>
      <button onClick={() => handleAddItem('add-showtime')}>Add Showtime</button>
    </div>
  );
};

export default AdminPage;

// src/components/UserAuth.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import "../styles/user.authorization.css"

const UserAuth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3001/api/register', { username, password });

    } catch (error) {
      console.error('Error registering user:', error);
    } 
  };   

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { username, password });
      const token = response.data.token;
      const user = response.data.user;
      if (token){
        console.log('Login successful!');
        console.log("user passed: " + response.data.token);
        if (user.admin){
          console.log("YOU ARE THE ADMIN BABY")
          navigate('/admin') //redirect admin to a different page
        }
        else {
          // Redirect to the welcome page after successful login
          navigate('/movies');
        }
        
      } else {
        console.log("Wrong username or password")
      }

    } catch (error) { 
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <div className="login-form">
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;

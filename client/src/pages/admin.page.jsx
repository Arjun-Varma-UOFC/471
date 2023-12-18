import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/admin.page.css"

const AdminPage = () => {
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [showAddSoundtrackForm, setShowAddSoundtrackForm] = useState(false);
  const [showAddCriticForm, setShowAddCriticForm] = useState(false);
  const [showAddCrewForm, setShowAddCrewForm] = useState(false);
  const [showAddShowtimeForm, setShowAddShowtimeForm] = useState(false);
  const [showReviewMonitor, setShowReviewMonitor] = useState(false);
  const [reviews, setReviews] = useState([])

  const handleLogout = () => {
    localStorage.removeItem('authToken');
  };


  const [movieData, setMovieData] = useState({
    title: '',
    year: '',
    summary: '',
    director: '',
    posterURL: '',
  });

  const [soundtrackData, setSoundtrackData] = useState({
    mid: '',
    title: '',
    composer: '',
  });

  const [criticData, setCriticData] = useState({
    userId: '',
  });

  const [crewData, setCrewData] = useState({
    name: '',
    bio: '',
    dob: '',
    poster: '',
  });

  const [showtimeData, setShowtimeData] = useState({
    mid: '',
    time: '',
    venue: '',
    date: '',
  });

  const handleAddItem = async (endpoint) => {
    try {
      let data = {}
      switch (endpoint) {
        case 'add-movie':
          setShowAddMovieForm(false);
          data = movieData
          break;
          
        case 'add-soundtrack':
          setShowAddSoundtrackForm(false);
          data = soundtrackData
        break;

        case 'add-critic':
          setShowAddCriticForm(false);
          data = criticData;
        break;
        
        case 'add-crew':
          setShowAddCrewForm(false);
          data = crewData
        break;
        
        case 'add-showtime':
          setShowAddShowtimeForm(false);
          data = showtimeData
        break;
        default:
          break;
      }
      const response = await axios.post(`http://localhost:3001/api/admin/${endpoint}`, data);
      console.log(response.data);
      // Optionally reset the form and hide it after successful submission
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
const handleClick = (formType) => {
    setShowAddMovieForm(false);
    setShowAddSoundtrackForm(false);
    setShowAddCriticForm(false);
    setShowAddCrewForm(false);
    setShowAddShowtimeForm(false);
    setShowReviewMonitor(false);
  
    // Set the state for the clicked form
    switch (formType) {
      case 'add-movie':
        setShowAddMovieForm(true);
        break;
      case 'add-soundtrack':
        setShowAddSoundtrackForm(true);
        break;
      case 'add-critic':
        setShowAddCriticForm(true);
        break;
      case 'add-crew':
        setShowAddCrewForm(true);
        break;
      case 'add-showtime':
        setShowAddShowtimeForm(true);
        break;
      case 'monitor-review':
        setShowReviewMonitor(true);
        fetchReviews();
        break;
      default:
        break;
    }
  };
  
  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/admin/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };
  
  const handleApproveReview = async (reviewId) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/admin/approve-review/${reviewId}`);
      console.log(response.data);
      // Update the state to reflect the change
      setReviews((prevReviews) => prevReviews.map((review) => (review.RID === reviewId ? { ...review, approved: true } : review)));
    } catch (error) {
      console.error('Error approving review:', error);
    }
  };
  
  const handleRejectReview = async (reviewId) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/admin/reject-review/${reviewId}`);
      console.log(response.data);
      // Update the state to reflect the change
      setReviews((prevReviews) => prevReviews.filter((review) => review.RID !== reviewId));
    } catch (error) {
      console.error('Error rejecting review:', error);
    }
  };
  

  return (
    <div className='admin-container'>
      <p>You Are the Admin Baby!</p>
      
      <div className = "button-container">
        <button onClick={() => handleClick('add-movie')}>Add Movie</button>
        <button onClick={() => handleClick('add-soundtrack')}>Add Soundtrack</button>
        <button onClick={() => handleClick('add-critic')}>Add Critic</button>
        <button onClick={() => handleClick('add-crew')}>Add Crew</button>
        <button onClick={() => handleClick('add-showtime')}>Add Showtime</button>
        <button onClick={() => handleClick('monitor-review')}>Monitor Reviews </button>
        <Link to= "/">
          <button onClick = {() => handleLogout()}>Logout</button>
        </Link>
      </div>
      
      {showAddMovieForm && (
        <div className = "form-container">
          <label>Title:</label>
          <input
            type="text"
            value={movieData.title}
            onChange={(e) => setMovieData({ ...movieData, title: e.target.value })}
          />
          
          <label>Year:</label>
          <input
            type="text"
            value={movieData.year}
            onChange={(e) => setMovieData({ ...movieData, year: e.target.value })}
          />
          
          <label>Summary:</label>
          <input
            type="text"
            value={movieData.summary}
            onChange={(e) => setMovieData({ ...movieData, summary: e.target.value })}
          />
          
          <label>Director:</label>
          <input
            type="text"
            value={movieData.director}
            onChange={(e) => setMovieData({ ...movieData, director: e.target.value })}
          />
          
          <label>Poster URL:</label>
          <input
            type="text"
            value={movieData.posterURL}
            onChange={(e) => setMovieData({ ...movieData, posterURL: e.target.value })}
          />
          
          <button onClick={() => handleAddItem('add-movie')}>Submit</button>
        </div>
      )}

      {showAddSoundtrackForm && (
        <div className="form-container">
          <label>Movie ID:</label>
          <input
            type="text"
            value={soundtrackData.mid}
            onChange={(e) => setSoundtrackData({ ...soundtrackData, mid: e.target.value })}
          />

          <label>Title:</label>
          <input
            type="text"
            value={soundtrackData.title}
            onChange={(e) => setSoundtrackData({ ...soundtrackData, title: e.target.value })}
          />

          <label>Composer Id:</label>
          <input
            type="text"
            value={soundtrackData.composer}
            onChange={(e) => setSoundtrackData({ ...soundtrackData, composer: e.target.value })}
          />

          <button onClick={() => handleAddItem('add-soundtrack')}>Submit</button>
        </div>
      )}

      {showAddCriticForm && (
        <div className="form-container">
          <label>Username:</label>
          <input
            type="text"
            value={criticData.userId}
            onChange={(e) => setCriticData({ ...criticData, userId: e.target.value })}
          />

          <button onClick={() => handleAddItem('add-critic', criticData)}>Submit</button>
        </div>
      )}

    {showAddCrewForm && (
      <div className="form-container">
      <label>Name:</label>
      <input
        type="text"
        value={crewData.name}
        onChange={(e) => setCrewData({ ...crewData, name: e.target.value })}
      />

      <label>Short Bio:</label>
      <input
        type="text"
        value={crewData.bio}
        onChange={(e) => setCrewData({ ...crewData, bio: e.target.value })}
      />

      <label>DOB:</label>
      <input
        type="text"
        value={crewData.dob}
        onChange={(e) => setCrewData({ ...crewData, dob: e.target.value })}
      />

      <label>Poster URL:</label>
      <input
        type="text"
        value={crewData.poster}
        onChange={(e) => setCrewData({ ...crewData, poster: e.target.value })}
      />

      <button onClick={() => handleAddItem('add-crew', crewData)}>Submit</button>
    </div>
    )} 
    {showAddShowtimeForm && (
        <div className="form-container">
        <label>Movie ID:</label>
        <input
          type="text"
          value={showtimeData.mid}
          onChange={(e) => setShowtimeData({ ...showtimeData, mid: e.target.value })}
        />
  
        <label>Time in HH/MM/SS Format: </label>
        <input
          type="text"
          value={showtimeData.time}
          onChange={(e) => setShowtimeData({ ...showtimeData, time: e.target.value })}
        />
  
        <label>Venue:</label>
        <input
          type="text"
          value={showtimeData.venue}
          onChange={(e) => setShowtimeData({ ...showtimeData, venue: e.target.value })}
        />
  
        <label>Date in YYYY/MM/DD Format:</label>
        <input 
          type="text"
          value={showtimeData.date}
          onChange={(e) => setShowtimeData({ ...showtimeData, date: e.target.value })}
        />
  
        <button onClick={() => handleAddItem('add-showtime', showtimeData)}>Submit</button>
      </div>
    )}
    
    {showReviewMonitor && (
      reviews.map((review) => (
        <div key={review.RID}>
          <p>Username: {review.user_name}</p>
          <p>Movie title: {review.Title}</p>
          <p>Description: {review.Description}</p>
          <button onClick={() => handleApproveReview(review.RID)}>Approve</button>
          <button onClick={() => handleRejectReview(review.RID)}>Reject</button>
        </div>
        )) 
    )}

    </div>
  );
};

export default AdminPage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserAuth from './authorization/user.authorization';
import WelcomePage from './pages/index.page';
import MovieDetailsPage from './pages/movieinfo.page';
import ActorPage from './pages/actor.page';
import OSTPage from './pages/soundtrack.page'
import UserPage from './pages/user.page';
import AdminPage from './pages/admin.page';
import PopularReviewPage from './pages/critic.popular-review.page';
import YearEndPage from './pages/critic.year-end.page';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserAuth />} />
          <Route path="/movies" element={<WelcomePage />} />
          <Route path= "/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path= "/actor/:actorId" element={<ActorPage />} />
          <Route path= "/user/:userId" element={<UserPage />} />
          <Route path= "/ost/:ostId" element={<OSTPage />} />
          <Route path= "/admin" element={<AdminPage />} />
          <Route path = "/popular-review/:userId" element = {<PopularReviewPage/>} />
          <Route path = "yearend/:year/:userId" element = {<YearEndPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import "../layout/screening.movie.css"

const Screenings = ({ shows }) => {
  if (!shows) console.log("null showtimmes")
  if (shows) {
    return ( 
      <div className="shows-list-container">
        <h3>Showtimes</h3>
        <ul className="show-list">
          {shows.map((s) => (
            <li key={s.Time} className="char-item">
                <p>{s.Venue}</p>
                <p>{s.Date}</p>
                <div className="rectangle-icon">{s.Time}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}

export default Screenings;

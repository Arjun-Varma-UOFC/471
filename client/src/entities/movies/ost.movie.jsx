import React from 'react';
import "../layout/soundtrack.movie.css"
import { Link } from 'react-router-dom'; 

const OSTList = ({ ost }) => {
  if (!ost) console.log("track null")
  if (ost) {
    return ( 
      <div className="track-list-container">
        <h3>OST</h3>
        <ul className="track-list">
          {ost.map((o) => (
            <li key={o.MID} className="track-item">
               <Link to={`/ost/${o.ostId}`} >
                <div className="circle-icon">{o.ostId}</div>
                <p>{o.Title}</p>
                </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}

export default OSTList;

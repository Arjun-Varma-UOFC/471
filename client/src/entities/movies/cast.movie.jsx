import React from 'react';
import "../layout/cast.movie.css"
import { Link } from 'react-router-dom'; 

const CharList = ({ cast }) => {
  if (!cast) console.log("cast null")
  if (cast) {
    console.log("Found cast")
    return ( 
      <div className="chars-list-container">
        <h3>Cast</h3>
        <ul className="char-list">
          {cast.map((c) => (
            <li key={c.MID} className="char-item">
               <Link to={`/actor/${c.CID}`} >
                <div className="circle-icon">{c.CID}</div>
                <p>{c.Name}</p>
                </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}

export default CharList;

import React from 'react';
import { Link } from 'react-router-dom'; 

const StudioList = ({ studios }) => {
  if (!studios) console.log("INDEPENDENT FILM")
  if (studios) {
    return ( 
      <div className="studios-list-container">
        <h3>Studio</h3>
        <ul className="studio-list">
          {studios.map((s) => (
            <li key={s.SID} className="studio-item">
               <Link to={`/studio/${s.SID}`} >
                <div className="circle-icon"></div>
                <p>{s.SName}</p>
                </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}

export default StudioList;

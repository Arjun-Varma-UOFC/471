const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;
let token = null;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
  port: 3305, //phpmyadmin port
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.post('/api/register', async (req, res) => {
    username = req.body.username,
    password = req.body.password,

    query = `SELECT * FROM user WHERE user_name = "${username}" `;
    db.query(query, function(error, data){
        if(data.length > 0)res.send("Username is taken, please use another one");
        else {
            query = "INSERT INTO user (user_id, user_name, password) values (?, ?, ?)" 
            db.query(query, [Math.floor(Math.random() * ( 90000 -  10000 + 1) + 10000) + 10000, username, password]) 
            console.log("Registered Successfully");
            res.redirect("/");
        }
    });
});

app.post('/api/login', async (req, res) => {
    username = req.body.username;
    password = req.body.password;
    query = `SELECT * FROM user WHERE user_name = "${username}" and password = "${password}"`;
    
  console.log("USERNAME: ", username);
  console.log("PASSWORD: ", password);
    db.query(query, function(error, data){
        if(data && data.length > 0)
        { 
          const user = data[0];
              {
                  token = jwt.sign({ userId: user.user_id, username: user.user_name }, 'secret', { expiresIn: '1h' });
                  res.json({ token, user });
              } 
        }
        else 
        { 
          console.log("Incorrect username or password");
        }
    });

});

app.get('/api/actor/:actorId', async (req, res) => {
  const aID = req.params.actorId;
  const query = 'SELECT * FROM crew_actor WHERE CID = ?';
  
  db.query(query, [aID], function(error, aData) {
    if (aData && aData.length > 0){
      const actor = aData[0];

      rquery = `SELECT * FROM review_crew, crew_actor, user WHERE review_crew.CID = crew_actor.CID
      AND user.user_id = review_crew.UID AND review_crew.CID = ?`
      db.query(rquery, [aID], function(error, rData){
        review = rData
        res.json({ actor , review });
      })
    }
  });
});

app.get('/api/user/:userId', async (req, res) => {
  uId = req.params.userId;
  userInfo = null;
  reviews = null;
  const query = `SELECT * FROM user WHERE user_id = ${uId}`;
  const rquery = `SELECT * FROM review WHERE UID = ${uId}`; //approved reviews only

  db.query(query, function(error, aData) {
    if (aData && aData.length > 0){
      userInfo = aData[0];
    }
  });

  db.query(rquery, function(error, rData) {
    if (rData && rData.length > 0){
      reviews = rData;
      res.json({ userInfo, reviews });
    }
  });
});
 
app.get('/api/search/:query', async (req, res) => {
  const query = req.params.query;
  movie = null;
  crew = null;
  user = null;
  const mquery = `SELECT * FROM movie WHERE title like "${query}" `;
  const uquery = `SELECT * FROM user WHERE user_name like "${query}" `;
  const cquery = `SELECT * FROM crew_actor WHERE Name like "${query}" `;

  db.query(mquery, function (error, data) {
    if (data.length > 0) movie = data;
  });

  db.query(uquery, function (error, data) {
    if (data.length > 0) user = data;
  });

  db.query(cquery, function (error, data) {
    if (data.length > 0) crew = data;
  });

  const combinedResults = [
    ...(movie ? movie.map((m) => ({ ...m, type: 'movie' })) : []),
    ...(crew ? crew.map((c) => ({ ...c, type: 'crew' })) : []),
    ...(user ? user.map((u) => ({ ...u, type: 'user' })) : []),
  ];
  console.log("Returning: ", combinedResults)
  res.json(combinedResults);
  res.end();
});


app.get('/api/ost/:ostId', async (req, res) => {
  const ostId = req.params.ostId;
  const query = `SELECT * FROM movie_soundtrack WHERE ostId = "${ostId}" `;
  
  db.query(query, function(error, data) {
    if (data && data.length > 0){
      ost = data[0];
      res.json({ ost });
    }
  });
});

app.get('/api/filmography/:crewId', async (req, res) => {
  const crewId = req.params.crewId;
  const query = `SELECT * FROM crew_filmography, movie WHERE movie.MID = crew_filmography.MID
  AND crew_filmography.CID = "${crewId}" `;
  
  db.query(query, function(error, data) {
    if (data && data.length > 0){
      films = data;
      res.json({ films });
    }
  });
});


// API endpoint to get movie data
app.get('/api/movies', async (req, res) => {
    query = 'SELECT mid, title, poster_url, year FROM movie'
    db.query(query, function(error, rows) {
      // Convert rows to plain JavaScript objects
      const movies = rows.map(row => ({ id: row.mid, title: row.title, poster_url: row.poster_url, year: row.year }));
      res.json(movies)
    });
  });

app.get('/api/critic/:userId', async (req, res) => {
  cid = req.params.userId
  query = `SELECT * from critic where UID = ${cid}`
    db.query(query, function(error, cData) {
      critic = cData[0]
      res.json({critic})
    })
})
 

app.get('/api/movies/:movieId', async (req, res) => {
    movieId = req.params.movieId;
    reviews = null;
    cast = null;
    ost = null;
    shows = null;
    query = `SELECT * FROM movie WHERE mid = "${movieId}" `;

    db.query(query, function(error, data) {
      if (data && data.length > 0){
        movie = data[0]
        mTitle = movie.Title
        
        cquery = `SELECT * FROM movie_char, crew_actor WHERE crew_actor.CID = movie_char.CID
         and mid = "${movieId}"`;
        db.query(cquery, function(error, castData) {
          cast = castData
        })

        rquery = `SELECT * FROM review, user, movie WHERE review.UID = user.user_id
         AND movie.MID = review.MID AND review.MID = "${movieId}" `;
        
        db.query(rquery, function(error, reviewData) {
          reviews = reviewData
        })

        tquery = `SELECT * FROM movie_soundtrack WHERE movie_soundtrack.MID = "${movieId}" `;
        db.query(tquery, function(error, soundtrackData) {
          ost = soundtrackData
        })

        squery =  `SELECT * FROM screening WHERE screening.MID = "${movieId}" `;
        db.query(squery, function(error, shData) {
          shows = shData
          res.json({movie, reviews, cast, ost, shows});
          
        })

      }
    });
  });
app.post('/api/movies/:movieId/addToWatchlist/', async (req, res) => {
  const movieId = req.params.movieId;
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
    const userId = decoded.userId;
    console.log("UID: ", userId);
    const query = "INSERT INTO user_watchlist (UID, MID) VALUES (?, ?)";
        db.query(query, [userId, movieId], (error, result) => {
            if (error) {
                console.log("UID: ", userId, " and MID: ", movieId)
                return res.status(500).json({ error: 'Error adding to watchlist' })  
            }
          })
    })
  
})

app.post("/api/reviews/:reviewID/like", async (req, res) => {
  const reviewID = req.params.reviewID
  query = `UPDATE review SET popularity = (popularity + 1) WHERE RID = "${reviewID}"`
  db.query(query, (error, data) => {
    if (error)console.log("SURPRISE THERE IS AN ERROR: ", error)
    else{
      rquery = `Select * from review where RID = ${reviewID}`
      db.query(rquery, (error, data) => {
        review = data[0]
        res.json({ review })
      })
      
    }
  })
})

app.get("/api/popular-review/:criticId", async (req, res) => {
  criticId = req.params.criticId;
  query = `SELECT * from review WHERE UID = "${criticId}" ORDER BY popularity DESC limit 3`
  db.query(query, (error, data) =>{
    res.json(data)
  })
})

app.get("/api/yearend/:year/:criticId", async (req, res) => {
  criticId = req.params.criticId;
  year = req.params.year;
  query = `SELECT * from review WHERE UID = "${criticId}" and MID in (
    SELECT MID from movie WHERE year = "${year}") order by rating limit 3` 
  db.query(query, (error, data) =>{
      res.json(data)
  })
})

//Controller of movie review submission
app.post('/api/movies/:movieId/submit-review', async (req, res) => {
  const movieId = req.params.movieId;
  const rating = req.body.rating;
  console.log("Rating: ", req.body.rating);
  const reviewText = req.body.reviewText;
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
    const userId = decoded.userId;
    const reviewQuery = "INSERT INTO review (UID, MID, RID, Description, approved, rating) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(reviewQuery, [userId, movieId, Math.floor(Math.random() * ( 90000 -  10000 + 1) + 10000) + 10000
           , reviewText, false, rating], (error, result) => {
            if (error) {
                console.log("error: ", error)
                return res.status(500).json({ error: 'Error submitting review' })  
            }
          })
    })
});

app.post('/api/review/crew', async (req, res) => {
  const crewId = req.body.actorId;
  const rating = req.body.rating;
  const reviewText = req.body.review
  console.log("Rating: ", req.body.rating);

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
    const userId = decoded.userId;
    const reviewQuery = "INSERT INTO review_crew (UID, CID, RID, Description, approved, rating) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(reviewQuery, [userId, crewId, Math.floor(Math.random() * ( 90000 -  10000 + 1) + 10000) + 10000
           , reviewText, false, rating], (error, result) => {
            if (error) {
                console.log("error: ", error)
                return res.status(500).json({ error: 'Error submitting review' })  
            }
          })
    })
});

app.post('/api/admin/add-movie', async (req, res) => {
  id = Math.floor(Math.random() * ( 90000 -  10000 + 1) + 10000) + 10000
  title = req.body.title
  year = req.body.year
  director = req.body.director
  summary = req.body.summary
  url = req.body.posterURL
  
  query = "INSERT INTO movie (MID, Title, Year, Poster_URL, Summary, Director) VALUES (?, ?, ?, ?, ?, ?)"
  db.query(query, [id, title, year, url, summary, director], (error, result) => {
    if (error){
      res.send("Error inserting data")
    }
    else {
      res.send("Success")
    }
  })
})

app.post('/api/admin/add-soundtrack', async (req, res) => {
  id = Math.floor(Math.random() * ( 90000 -  10000 + 1) + 10000) + 10000
  title = req.body.title
  mid = req.body.mid

  query = "INSERT INTO movie_soundtrack (MID, Title, ostId) VALUES (?, ?, ?)"
  db.query(query, [mid, title, id], (error, result) => {
    if (error){
      res.send("Error inserting data")
    }
    else {
      res.send("Success")
    }
  })
})

app.post('/api/admin/add-showtime', async (req, res) => {
  mid = req.body.mid
  date = req.body.date
  time = req.body.time
  venue = req.body.venue
  
  query = "INSERT INTO screening (MID, Time, Venue, Date) VALUES (?, ?, ?, ?)"
  db.query(query, [mid, time, venue, date], (error, result) => {
    if (error){
      res.send("Error inserting data")
    }
    else {
      res.send("Success")
    }
  })
})

app.post('/api/admin/add-crew', async (req, res) => {
  id = Math.floor(Math.random() * ( 90000 -  10000 + 1) + 10000) + 10000
  cname = req.body.name
  bio = req.body.bio
  education = req.body.education
  dob = req.body.dob
  awards = req.body.awards
  
  query = "INSERT INTO crew_actor (Name, Education, Bio, DOB, Awards, CID) VALUES (?, ?, ?, ?, ?, ?)"
  db.query(query, [cname, education, bio, dob, awards, id], (error, result) => {
    if (error){
      res.send("Error inserting data")
    }
    else {
      res.send("Success")
    }
  })
})

app.post('/api/admin/add-critic', async (req, res) => {
  uid = req.body.userId

  query = `UPDATE user SET critic = '1' WHERE user_id = "${uid}"`
  db.query(query, (error, result) => {
    if (error){
      res.send("Error changing data")
    }
    else {
      res.send("Success")
    }
  })
})

app.get("/api/admin/reviews", async(req, res) => {
  query = `SELECT * FROM review WHERE approved = 0`
  db.query(query, (error, result) => {
    res.json(result);
  })
})

app.put("/api/admin/approve-review/:reviewId", async(req, res) => {
  reviewId = req.params.reviewId;
  query = `UPDATE review SET approved = '1' WHERE RID = "${reviewId}"`
  db.query(query, (error, result) => {
    res.json(result);
  })
})

app.put("/api/admin/reject-review/:reviewId", async(req, res) => {
  reviewId = req.params.reviewId;
  query = `DELETE FROM review WHERE RID = "${reviewId}"`
  db.query(query, (error, result) => {
    res.json(result);
  })
})

app.get('/api/movie-name/:movieId', async (req, res) => {
  const movieId = req.params.movieId;
  const query = 'SELECT title FROM movie WHERE mid = ?';
  db.query(query, [movieId], (error, results) => {
      if (results.length > 0) {
        const movieTitle = results[0].title;
        res.json({ title: movieTitle });
      } else {
        res.status(404).json({ error: 'Movie not found' });
      }
  });
})

app.get("/api/follow/:criticId", async (req, res) => {
  uId = null;
  criticId = req.params.criticId;
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
    uId = decoded.userId;   
  })
 
  const query = 'INSERT INTO network (UID, Following_UID) VALUES (?, ?)';
  db.query(query, [uId, criticId], (error, result) => {
    res.json(result)
    if (error)(console.log(error))
});
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

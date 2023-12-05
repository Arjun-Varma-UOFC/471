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
      res.json({ actor });
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

/** 
app.get('/api/search/:query', async (req, res) => {
  const query = req.params.query;
  movie = null;
  actor = null;
  user = null;
  const mquery = `SELECT * FROM movie WHERE title like "${query}" `;
  const uquery = `SELECT * FROM user WHERE user_name like "${query}" `;
  const aquery = `SELECT * FROM crew_actor WHERE Name like "${query}" `;

  db.query(mquery, function (error, data) {
    if (data.length > 0) movie = data;
  });

  db.query(uquery, function (error, data) {
    if (data.length > 0) user = data;
  });

  db.query(aquery, function (error, data) {
    if (data.length > 0) actor = data;
  });

  const combinedResults = [
    ...(movie ? movie.map((m) => ({ ...m, type: 'movie' })) : []),
    ...(actor ? actor.map((a) => ({ ...a, type: 'actor' })) : []),
    ...(user ? user.map((u) => ({ ...u, type: 'user' })) : []),
  ];
  console.log("Returning: ", combinedResults)
  res.json(combinedResults);
  res.end();
});
*/

app.get('/api/ost/:ostId', async (req, res) => {
  const ostId = req.params.ostId;
  const query = `SELECT * FROM movie_soundtrack WHERE ostId = "${ostId}" `;
  
  db.query(query, function(error, data) {
    if (data && data.length > 0){
      console.log("Found soundtrack");
      ost = data[0];
      res.json({ ost });
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
        
        cquery = `SELECT * FROM movie_char WHERE mid = "${movieId}"`;
        db.query(cquery, function(error, castData) {
          cast = castData
        })

        rquery = `SELECT * FROM review WHERE review.MID = "${movieId}" `;
        
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

//Controller of movie review submission
app.post('/api/movies/:movieId/submit-review', async (req, res) => {
  const movieId = req.params.movieId;
  const { reviewText } = req.body;
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
    const userId = decoded.userId;
    const reviewQuery = "INSERT INTO review (UID, MID, RID, Description, approved) VALUES (?, ?, ?, ?, ?)";
        db.query(reviewQuery, [userId, movieId, Math.floor(Math.random() * ( 90000 -  10000 + 1) + 10000) + 10000
           , reviewText, false], (error, result) => {
            if (error) {
                return res.status(500).json({ error: 'Error submitting review' })  
            }
          })
    })
  });

app.post('/api/admin/add-movie/', async (req, res) => {
    const movieId = req.params.movieId;
  })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

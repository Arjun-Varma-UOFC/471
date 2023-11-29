const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;

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
    query = `
    SELECT * FROM user 
    WHERE user_name = "${username}"
    `;

    db.query(query, function(error, data){

        if(data && data.length > 0)
        {
            const user = data[0];
            for(var count = 0; count < data.length; count++)
            {
                if(data[count].password == password)
                {
                   // request.session.user_id = data[count].user_id;
                    const token = jwt.sign({ userId: user.user_id, username: user.user_name }, 'secret', { expiresIn: '1h' });

                    res.json({ token });
                } 
                else
                {
                    res.send('Incorrect password');
                }
            }
        }
        else 
        {
            res.send('Incorrect username');
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
    query = `SELECT * FROM movie WHERE mid = "${movieId}" `;
    db.query(query, function(error, data) {
      if (data && data.length > 0){
        movie = data[0]
        rquery = `SELECT * FROM review WHERE review.MID = "${movieId}" `;
        
        db.query(rquery, function(error, reviewData) {
          reviews = reviewData
          console.log("Found reviews")
          res.json({movie, reviews});
        })
      }
    });
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const request = require('request');

const PORT = 3000;
const app = express();
const OMDB_URL = 'http://omdbapi.com';
const OMDB_APIKEY = 'thewdb';
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('search');
});

app.get('/results', (req, res) => {
  // Format the search parameter passed in.
  let search_val = req.query.search;
  let url = `${OMDB_URL}/?s=${search_val}&apikey=${OMDB_APIKEY}`;
  // OMDB request.
  request( url, (error, response, body ) => {
    if (!error && response.statusCode === 200) {
      res.render('results', {data: JSON.parse(body)});
    } else {
      console.log(error)
      res.status(404).send('Bad request');
    }
  });
});

app.listen(PORT, () => {
  console.log(`app is up and running on port: ${PORT}`);
})
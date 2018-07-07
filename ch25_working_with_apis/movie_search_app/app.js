const express = require('express');
const request = require('request');

const PORT = 3000;
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/results', (req, res) => {
  let res_data;
  request('http://omdbapi.com/?s=star%20wars&apikey=thewdb', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res_data = JSON.parse(body);
      // res.send(res_data);
      res.render('results', {data: res_data});
    } else {
      console.log(error)
      res.status(404).send('Bad request');
    }
  })
});

app.listen(PORT, () => {
  console.log(`app is up and running on port: ${PORT}`);
})
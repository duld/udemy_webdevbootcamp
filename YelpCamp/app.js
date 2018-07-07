const express = require('express');

let app = express();
let PORT = 3000;
app.set('view engine', "ejs");


// GET /
app.get('/', (req, res) => {
  res.render('landing');
});

// GET /campgrounds
app.get('/campgrounds', (req, res) => {
  let campgrounds = [
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Granite Hill", image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Bent Fork", image: "https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Slasher Hangout", image: "https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?auto=compress&cs=tinysrgb&h=350"}
  ];

  res.render('campgrounds', {campgrounds})
});

// start the server.
app.listen(PORT, () => {
  console.log(`YelpCamp server is running on port: ${PORT}`);
});
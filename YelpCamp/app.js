const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let PORT = 3000;

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Temp Data
let campgrounds = [
  {name: "Salmon Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
  {name: "Granite Hill", image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=350"},
  {name: "Bent Fork", image: "https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&h=350"},
  {name: "Slasher Hangout", image: "https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?auto=compress&cs=tinysrgb&h=350"}
];

// ROUTES //
// /
app.get('/', (req, res) => {
  res.render('landing');
});

// /campgrounds
app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', {campgrounds})
});

app.post('/campgrounds', (req, res) => {
  // get data from form and append to campground array.
  // redirect to /campgrounds
  let name = req.body.name;
  let image = req.body.image;
  campgrounds.push({name, image});
  res.redirect('/campgrounds');
});

// /campgrounds/new
app.get('/campgrounds/new', (req, res) => {
  res.render('new.ejs');
});

// app.patch('campgrounds/', (req, res) => {
//   console.log('inside patch')
//   let name = req.body.name;
//   let image = req.body.image;
//   let rename = req.body.rename || name;

//   console.log(name, image, rename)
//   let campground = campgrounds.filter((cur) => {
//     return cur.name === name;
//   })[0];

//   if (campground) {
//     campground.name = rename;
//     campground.image = image;
//   }

//   res.redirect('/campgrounds');
// })

// start the server.
app.listen(PORT, () => {
  console.log(`YelpCamp server is running on port: ${PORT}`);
});
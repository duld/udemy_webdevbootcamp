const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Setup Express
let app = express();
let PORT = 3000;

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Connect to Mongodb
mongoose.connect('mongodb://localhost:27017/YelpCamp', {useNewUrlParser: true})
  .then(() => console.log('connected to MongoDB'))
  .catch(err => console.log('There was a problem trying to connect to MongoDB', err));

// Schema
let campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

let Campground = mongoose.model('Campground', campgroundSchema);

// Temp Data
let campgrounds = [
  {name: "Salmon Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350", description: "So named due to an excess of Salmon fishermen who frequented this location. There are no known salmon in or around this location."},
  {name: "Granite Hill", image: "https://t00.deviantart.net/QyuTy1K7Nqumfx7aagdbgl1x7A0=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/2fd2/th/pre/i/2013/245/3/f/rapids_and_waterfalls_by_lightningthefox7-d6ktxtu.jpg", description: "Enjoy a firm night's rest. If you crave a rock between your shoulder blades and mosquitos in your nose, look no further!"},
  {name: "Bent Fork", image: "https://parks.state.wa.us/ImageRepository/Document?documentID=10012", description: "Who bent all these forks!? Someone better pick this shit up!"},
  {name: "Slasher Hangout", image: "http://www.outdoorexposurephoto.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/4/8/4855_01_m.jpg", description: "Just stay home"}
];

// // Insert the seed data
// Campground.insertMany(campgrounds)
//   .catch(err => console.log('there was a problem saving to MongoDB'))

// ROUTES //
// /
app.get('/', (req, res) => {
  res.render('landing');
});

// /campgrounds
app.get('/campgrounds', (req, res) => {
  // load all campgrounds from db
  Campground.find()
    .then(campgrounds => {
      res.render('campgrounds', {campgrounds});
    })
    .catch(err => {
      res.render('campgrounds', {})
    });
  // res.render('campgrounds', {campgrounds})
});

app.post('/campgrounds', (req, res) => {
  // get data from form and append to campground array.
  // redirect to /campgrounds
  let name = req.body.name;
  let image = req.body.image;
  let description = req.body.description;
  Campground.create({name, image, description})
    .then(campground => {
      res.redirect('/campgrounds');
    })
    .catch(err => {
      console.log('there was a problem saving to the database');
      res.redirect('/campgrounds');
    });
  
});

// /campgrounds/new
app.get('/campgrounds/new', (req, res) => {
  res.render('new.ejs');
});


app.get('/campgrounds/:id', (req, res) => {
  // find the campground with the id
  Campground.findById(req.params.id, {_id: 0, name: 1, description: 1, image: 1})
    .then( campDoc => {
      res.render('show', {campground: campDoc})
    })
    .catch(err => {
      console.log('couldnt find campground');
      res.redirect('/campgrounds');
    })
  // res.send(`<h1>param: ${req.params.id}</h1>`);
  // res.render("show", {id: req.params.id});
});

// app.post('campgrounds/', (req, res) => {
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
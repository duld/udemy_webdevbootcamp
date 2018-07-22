const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const seedDB = require('./seeds');

// Models
const {Campground} = require('./models/campground');

// Setup Express
let app = express();
let PORT = 3000;

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Connect to Mongodb
mongoose.connect('mongodb://localhost:27017/YelpCamp', {useNewUrlParser: true})
    .then(() => {
      console.log('connected to MongoDB');
      seedDB();
    })
  .catch(err => console.log('There was a problem trying to connect to MongoDB', err));

  
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
      res.render('campgrounds/index', {campgrounds});
    })
    .catch(err => {
      res.render('index', {})
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
  res.render('campgrounds/new.ejs');
});


app.get('/campgrounds/:id', (req, res) => {
  // find the campground with the id
  Campground.findById(req.params.id).populate('comments').exec()
    .then( campDoc => {
      res.render('campgrounds/show', {campground: campDoc})
    })
    .catch(err => {
      console.log('couldnt find campground');
      res.redirect('/campgrounds');
    });
});

app.get('/campgrounds/:id/comments/new', (req, res) => {
  // find campground by id
  Campground.findById(req.params.id)
    .then(campground => {
      res.render('comments/new', {campground: campground})
    })
    .catch(err => {
      res.redirect('/campgrounds')
    });
})

// start the server.
app.listen(PORT, () => {
  console.log(`YelpCamp server is running on port: ${PORT}`);
});
const express = require('express');
const router = express.Router();
// models
const Campground = require('../models/campground');

// /campgrounds
router.get('/', (req, res) => {
  // load all campgrounds from db
  Campground.find()
    .then(campgrounds => {
      res.render('campgrounds/index', {campgrounds});
    })
    .catch(err => {
      res.render('index')
    });
});

router.post('/', isLoggedIn, (req, res) => {
  // get data from form and append to campground array.
  // redirect to /campgrounds
  let campgroundData = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    author: { id: req.user._id, username: req.user.username }
  };
  
  Campground.create(campgroundData)
    .then(campground => {
      res.redirect('/campgrounds');
    })
    .catch(err => {
      console.log('there was a problem saving to the database');
      res.redirect('/campgrounds');
    });
  
});

// Render new campground form
router.get('/new', isLoggedIn, (req, res) => {
  res.render('campgrounds/new.ejs');
});

// Get campground by ID
router.get('/:id', (req, res) => {
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

// Edit Campground Route
router.get('/:id/edit', (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      res.render('campgrounds/edit', {campground});
    })
    .catch(err => {
      res.redirect('/campgrounds');
      console.log(err);
    })
  
});

// Update Campground Route
router.put('/:id', (req, res) => {
  // res.send('put route!');
  // update campground with new data
  Campground.findByIdAndUpdate(req.params.id, req.body.campground)
    .then( campground => {
      res.redirect(`/campgrounds/${req.params.id}`);
    })
    .catch( err => {
      console.log(err);
      res.redirect(`/campgrounds/${req.params.id}`);
    });
});


// Middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()){
    return next();
  } else {
    res.redirect('/login');
  }
}


module.exports = router;
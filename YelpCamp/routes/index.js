const router = require('express').Router();
const passport = require('passport');
// Models
const User = require('../models/user');

// Routes //
router.get('/', (req, res) => {
  res.render('landing');
});

// Show register form
router.get('/register', (req, res) => {
  res.render('register');
});

// Register a new user
router.post('/register', (req, res) => {
  // res.send('lets register ' + req.body.username);
  User.register(new User({username: req.body.username}), req.body.password)
    .then( user => {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/campgrounds');
      });
    })
    .catch( err => {
      console.log(err);
      res.redirect('/register');
    })
});

// Show Login form
router.get('/login', (req, res) => {
  res.render('login', {currentUser: req.user});
});

router.post('/login', passport.authenticate('local', 
  {
    successRedirect: '/campgrounds', 
    failureRedirect: '/login'}), 
    (req, res) => {
      // res.send('login logic');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/campgrounds');
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()){
    console.log(req.user)
    return next();
  } else {
    res.redirect('/login');
  }
}

module.exports = router;
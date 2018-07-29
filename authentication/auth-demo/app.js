const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
// local libs
const User = require('./models/user');
// Constants
const PORT = 3000;

// Setup express //
let app = express();
app.set('view engine', 'ejs');
// setup express middleware - body-parser
app.use(bodyParser.urlencoded({extended: true}));
// setup express middleware - passport
app.use(require('express-session')({
  secret: "OtterKilledOurTurkeyNowItsPersonal",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Setup passport //
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to mongodb //
mongoose.connect('mongodb://localhost:27017/auth_demo_app', { useNewUrlParser: true})
  .then(() => {
    console.log('connected to db!');
  })
  .catch(err => console.log(err));


// ROUTES //
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/secret', (req, res) => {
  res.render('secret');
});

// Register Routes //
// Render register form
app.get('/register', (req, res) => {
  res.render('register');
});
// Create a new User
app.post('/register', (req, res) => {
  
  User.register( new User({username: req.body.username}), req.body.password )
    .then(user => {
      console.log('new user created', user.username);
      passport.authenticate('local')(req, res, () => {
        res.redirect('/secret');
      });
    })
    .catch(err => {
      console.log('\nthere was a problem registering a new user!');
      console.log(err);
      res.render('register');
    });
});

// Login Routes //
// Render login form
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: "/secret",
  failureRedirect: '/login'
  }), (req, res) => {

});

app.get('/logout', (req, res) => {
  res.send('logout');
});

app.listen(PORT, () => {
  console.log(`Server up and runninng on Port ${PORT}`)
});
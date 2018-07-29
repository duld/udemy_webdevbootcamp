const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
// local libs
const User = require('./models/user');
// Constants
const PORT = 3000;

// Setup express //
let app = express();
app.set('view engine', 'ejs');
// setup express middleware - passport
app.use(require('express-session')({
  secret: "OtterKilledOurTurkeyNowItsPersonal",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Setup passport //
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

app.get('/login', (req, res) => {
  res.send('login!');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/logout', (req, res) => {
  res.send('logout');
})

app.listen(PORT, () => {
  console.log(`Server up and runninng on Port ${PORT}`)
});
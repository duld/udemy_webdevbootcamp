const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const seedDB = require('./seeds');
const path = require('path');

// Models
const User = require('./models/user');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

// Routes
const campgroundRoutes = require('./routes/campgrounds');
const commentRoutes = require('./routes/comments');
const indexRoutes = require('./routes/index');

// Setup Express //
let app = express();
let PORT = 3000;

app.set( 'view engine', 'ejs' );
app.use( bodyParser.urlencoded({extended: true}));
app.use( express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Initialize Auth
app.use( require('express-session')({
  secret: "theGofferAteMySpaghettiSpoon",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Make ther user object available to ejs
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// tell express to use our routes
app.use('/', indexRoutes);
app.use('/campgrounds/:id/comments',commentRoutes);
app.use('/campgrounds', campgroundRoutes);

// Setup Passport //
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Connect to Mongodb //
mongoose.connect('mongodb://localhost:27017/YelpCamp', {useNewUrlParser: true})
  .then(() => {
    console.log('connected to MongoDB');
    // seedDB();
    })
  .catch(err => {
    console.log('There was a problem trying to connect to MongoDB');
    console.log(err);
  });



// start the server.
app.listen(PORT, () => {
  console.log(`YelpCamp server is running on port: ${PORT}`);
});
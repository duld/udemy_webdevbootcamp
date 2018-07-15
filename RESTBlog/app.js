// External Lib
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 3000;

// Setup Express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/rest_blog", {useNewUrlParser: true});

// Blog Mongoose Schema
let blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  }
});

let Blog = mongoose.model('Blog', blogSchema);

// Temp Data
let blogs = [
  {
    title: "Don't touch my shit",
    image: "https://images.unsplash.com/photo-1531584838419-d5d24b120bf6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f05ab3861a1f442b340e82dac9d9b122&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
    body: "Hey I'll be right back, please don't steal my Macbook Pro, iPhone, liqour or coffee. Why am I taking a depressant with an stimulant? Well See I'm in a Cafe so I have to buy a coffee, but I want to feed my depression so I need the liqour. Oh I see you noticed my heavy stock magazine, yes it is 'Kinfolk', I'm so happy you noticed."
  }
];

// Dump the old data
Blog.deleteMany({})
  .catch(err => console.log('There was a problem deleting from the DB'));
// Inject the new data
Blog.insertMany(blogs)
  .then((docs) => {
    if (docs) {
      console.log('temp data was inserted into DB');
    }
  })
  .catch(err => {
    console.log('there was a problem inserting the data.')
  });

// ROUTES
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
  // load all the blogs
  Blog.find({})
    .then( blog_documents => {
      if (blog_documents) {
        res.render('index', {blogs: blog_documents});
      }
    })
    .catch(err => {
      res.render('index')
    });
})



// Start Server
app.listen(PORT, () => {
  console.log(`Blog is up and running on Port ${3000}`);
});
const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let PORT = 3000;

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Temp Data
let campgrounds = [
  {name: "Salmon Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
  {name: "Granite Hill", image: "https://t00.deviantart.net/QyuTy1K7Nqumfx7aagdbgl1x7A0=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/2fd2/th/pre/i/2013/245/3/f/rapids_and_waterfalls_by_lightningthefox7-d6ktxtu.jpg"},
  {name: "Bent Fork", image: "https://parks.state.wa.us/ImageRepository/Document?documentID=10012"},
  {name: "Slasher Hangout", image: "http://www.outdoorexposurephoto.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/4/8/4855_01_m.jpg"}
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
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

// SEED data
let comments = [
  {
    text: 'this place is great!',
    author: 'Bill',
    _id: mongoose.Types.ObjectId()
  },
  {
    text: 'Tell him to stop it! Bill. STOP IT!',
    author: 'Dwight',
    _id: mongoose.Types.ObjectId()
  },
  {
    text: 'Look at all those THICCENS!',
    author: 'Small Girl',
    _id: mongoose.Types.ObjectId()
  }
]
let campgrounds = [
  {
    name: "Salmon Creek", 
    image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350", 
    description: "So named due to an excess of Salmon fishermen who frequented this location. There are no known salmon in or around this location.",
    // comments: [{_id: comments[0]._id}, {_id: comments[1]._id}]
  },
  {
    name: "Granite Hill", 
    image: "https://t00.deviantart.net/QyuTy1K7Nqumfx7aagdbgl1x7A0=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/2fd2/th/pre/i/2013/245/3/f/rapids_and_waterfalls_by_lightningthefox7-d6ktxtu.jpg", 
    description: "Enjoy a firm night's rest. If you crave a rock between your shoulder blades and mosquitos in your nose, look no further!",
    // comments: [{_id: comments[2]._id}]
  }, 
  {
    name: "Bent Fork", 
    image: "https://parks.state.wa.us/ImageRepository/Document?documentID=10012", 
    description: "Who bent all these forks!? Someone better pick this shit up!"
  },
  {
    name: "Slasher Hangout", 
    image: "http://www.outdoorexposurephoto.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/4/8/4855_01_m.jpg", 
    description: "Just stay home"
  }
];

// remove


const seedDB = () => {
  // clear the database of all current values
  // Campground.remove({})
  //   .then(() => {
      
  //     // Insert seed data
  //     Campground.insertMany(campgrounds)
  //       .then(() => {
  //         console.log('--> campgrounds seeded');
  //       })
  //       .catch(err => console.log(err));
  //   })
  //   .catch( err => console.log(err));
  
  // Comment.remove({})
  //   .then(() => {
  //     Comment.insertMany(comments)
  //     .then(() => console.log('--> comments inserted'))
  //     .catch( err => {
  //       console.log('There was a problem seeding the comments!');
  //       console.log(err);
  //     });
  //   })
  Campground.remove({})
    .then(() => console.log('--> campgrounds removed'))
    .catch( err => console.log(err))
  Comment.remove({})
    .then(() => console.log('--> comments removed'))
    .catch(err => console.log(err));
}

module.exports = seedDB;
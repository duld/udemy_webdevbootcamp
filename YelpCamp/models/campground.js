const mongoose = require('mongoose');

let campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

module.exports = mongoose.model('Campground', campgroundSchema);



// Temp Data
// let campgrounds = [
//   {name: "Salmon Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350", description: "So named due to an excess of Salmon fishermen who frequented this location. There are no known salmon in or around this location."},
//   {name: "Granite Hill", image: "https://t00.deviantart.net/QyuTy1K7Nqumfx7aagdbgl1x7A0=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/2fd2/th/pre/i/2013/245/3/f/rapids_and_waterfalls_by_lightningthefox7-d6ktxtu.jpg", description: "Enjoy a firm night's rest. If you crave a rock between your shoulder blades and mosquitos in your nose, look no further!"},
//   {name: "Bent Fork", image: "https://parks.state.wa.us/ImageRepository/Document?documentID=10012", description: "Who bent all these forks!? Someone better pick this shit up!"},
//   {name: "Slasher Hangout", image: "http://www.outdoorexposurephoto.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/4/8/4855_01_m.jpg", description: "Just stay home"}
// ];

// // Insert the seed data
// Campground.insertMany(campgrounds)
//   .catch(err => console.log('there was a problem saving to MongoDB'))
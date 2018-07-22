const mongoose = require('mongoose');
const Post = require('./post');

let userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }]
});

let User = mongoose.model("User", userSchema);

module.exports = {User}

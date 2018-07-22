const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
  author: String,
  text: String
});

let Comment = mongoose.model('Comment', commentSchema);

module.exports = {Comment}

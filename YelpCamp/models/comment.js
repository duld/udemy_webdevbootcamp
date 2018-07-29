const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
  author: String,
  text: String
});

// Export the model
module.exports = mongoose.model('Comment', commentSchema);

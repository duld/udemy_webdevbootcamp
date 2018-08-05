const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  text: String
});

// Export the model
module.exports = mongoose.model('Comment', commentSchema);

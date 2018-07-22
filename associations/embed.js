const mongoose = require('mongoose');

// load in the mongoose models.
const {Post} = require('./models/post');
const {User} = require('./models/user');

mongoose.connect('mongodb://localhost:27017/blog-demo', {useNewUrlParser: true})
  .then(() => {
    console.log('connected to mongodb');
    console.log('\tthe damned stand ready...');
  })
  .catch( err => {
    console.log('There was a problem connecting to the database');
    console.log(err);
  });


User.findOne({email: 'bob@burgers.com'}, {posts: 1})
  .then( userPosts => {
    Post.find({'_id': userPosts.posts})
      .then( docs => {
        docs.forEach( post => console.log(post.title + '\n`----> ' + post.content))
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
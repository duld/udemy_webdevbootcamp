const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog-demo', {useNewUrlParser: true})
  .then(() => {
    console.log('connected to mongodb');
    console.log('\tthe damned stand ready...');
  })
  .catch( err => {
    console.log('There was a problem connecting to the database');
    console.log(err);
  });


// Post - title, content
let postSchema = new mongoose.Schema({
  title: String,
  content: String
});

let Post = mongoose.model('Post', postSchema);

// User - email, name
let userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }]
});

let User = mongoose.model("User", userSchema);

// User.create({
//   email: 'bob@burgers.com',
//   name: 'Bob Belcher'
// });

// Post.create({
//   title: 'Dog-gone-it',
//   content: 'The Dog has gone missing.'
// })
//   .then( post => {
//     // lookup user
//     User.findOneAndUpdate({email: 'bob@burgers.com'}, 
//       {"$push": { "posts": {_id: post._id}}},
//       {"new": true, "upsert": true})
//       .then( updatedUser => console.log(updatedUser))
//       .catch( err => console.log(err));
//   });

User.findOne({email: 'bob@burgers.com'}, {posts: 1})
  .then( userPosts => {
    // console.log(posts);
    // userPosts.posts.forEach(post => {
    //   // lookup post associated by id, then print content
    //   Post.find(post)
    //     .then( postDoc => console.log(postDoc.content))
    //     .catch( err => console.log(err));
    // });
    Post.find({'_id': userPosts.posts})
      .then( docs => {
        docs.forEach( post => console.log(post.title + '\n`----> ' + post.content))
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
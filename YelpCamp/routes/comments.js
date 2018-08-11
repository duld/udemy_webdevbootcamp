const express = require("express");
const router = express.Router({mergeParams: true});
const Campground = require('../models/campground');
const Comment = require('../models/comment');

// Render new campground comment form
router.get('/new', isLoggedIn, (req, res) => {
  // find campground by id
  Campground.findById(req.params.id)
    .then(campground => {
      res.render('comments/new', {campground: campground})
    })
    .catch(err => {
      res.redirect('/campgrounds')
    });
});

// Create a new comment on a campground
router.post('/', isLoggedIn, (req, res) => {
  let commentData = {text: req.body.text, author: req.body.author};
  // lookup campground
  Campground.findById(req.params.id)
    .then( campground => { // if we find the campground create a new comment
      Comment.create(commentData)
        .then( comment => {
          // console.log('Comment username: ', req.user.username);
          comment.author = {
            id: req.user._id,
            username: req.user.username
          };
          comment.save();
          // associate the newly created comment with the campground
          campground.comments.push(comment._id);
          campground.save()
            // redirect to the campground and display the new comment
            .then(() => res.redirect(`/campgrounds/${req.params.id}`))
            .catch(err => {
              console.log('there was a problem updating the campground');
              res.redirect(`/campgrounds/${req.params.id}`);
            });
        })
        .catch( err => {
          console.log('there was a problem creating the comment!');
          res.redirect(`/campgrounds/${req.params.id}`);
        })
    })
    // bad campground id
    .catch( err => {
      console.log('unable to find the campground');
      res.redirect('/campgrounds');
    });
});

// Show form to edit the comment with
router.get('/:comment_id/edit', (req, res) => {
  Campground.findById(req.params.id)
    .then( campground => {
      Comment.findById(req.params.comment_id)
        .then( comment => {
          res.render('comments/edit', {campground, comment});
        })
    })
    .catch( err => {
      console.log(err);
      res.redirect('/campgrounds');
    })
  
});

// Edit the using the new text data
router.put('/:comment_id', (req, res) => {
  res.send(req.body.text) // temp
})


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()){
    return next();
  } else {
    res.redirect('/login');
  }
}

module.exports = router;
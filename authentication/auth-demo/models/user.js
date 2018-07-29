const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


let UserSchema = new mongoose.Schema({
  username: String,
  password: String
});
// add the passport-local-mongoose methods to our schema.
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
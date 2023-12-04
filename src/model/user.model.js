const mongodb = require('mongoose');

const userSchema = new mongodb.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  isBanned: { type: Boolean, default: false },
});

const User = mongodb.model('User', userSchema);
module.exports =  User ;
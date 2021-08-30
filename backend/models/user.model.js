const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creating a template for the creation of users in
//Database, a username is required, must be unique, trim
//the white space and must be at least three charecters
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creating an schema for exercises which contains a username, description
//along with the duration of exercise and the date it was done
const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

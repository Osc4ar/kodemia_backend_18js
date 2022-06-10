const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 5,
    maxlength: 100,
  },
  content: String,
  comments: [
    {
      user: String,
      date: {
        type: Date,
        default: Date.now,
      },
      comment: String,
    },
  ],
});

const mongoose = require("mongoose");

const generalSchema = new mongoose.Schema({
  type: String,  // Ye add karna zaroori hai
  title: String,
  author: String,
  category: String,
  price: Number,
  stock: Number,
  description: String,
  coverImage: String, // URL for the book cover image
});

const General = mongoose.model("General", generalSchema);

module.exports = General;

const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  id:String,
  name:String,
  image:String
});

module.exports = mongoose.model("Book", BookSchema);

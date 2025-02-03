const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  notableWorks: [String],
});

module.exports = mongoose.model("Author", AuthorSchema);

const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: [String], // An array of phone numbers
      required: true,
    },
    email: {
      type: String,
      required: true,
    }
  },
  {
    collection: "branches" // Explicitly mention the collection name
  }
);

const Branch = mongoose.model("Branch", branchSchema);

module.exports = Branch;

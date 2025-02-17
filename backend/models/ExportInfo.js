const mongoose = require('mongoose');

const exportInfoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  exports: [String], // Changed from exportCategories to exports to match the data
  coreAreas: [String], // Changed from exportCategories to coreAreas to match the data
  customerCategories: [String], // Changed from exportCategories to customerCategories to match the data
  contact: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    phone: [String], // This is an array of phone numbers, allowing for multiple entries
    email: [String], // Changed to accept multiple emails
    note: { type: String, required: true } // Added note field for legal disputes information
  }
}, {
  collection: 'ExportInfo'  // Specify collection name for dynamic fetching
});

module.exports = mongoose.model('ExportInfo', exportInfoSchema);

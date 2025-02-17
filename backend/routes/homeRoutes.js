const express = require("express");
const Location = require("../models/Location");
const Book = require("../models/Book");
const Author = require("../models/Author");
const Publisher = require("../models/Publisher");
// const AboutUs = require("../models/AboutUs");
const { getAboutUs, updateAboutUs } = require("../controllers/AboutusController");
const { getLocations, addLocation } = require("../controllers/LocationController");


const router = express.Router();

// 📍 Get All Locations
// router.get("/locations", async (req, res) => {
//   try {
//     const locations = await Location.find();
//     res.json(locations);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.get("/locations", getLocations);

// Add a new location
router.post("/admin/locations", addLocation);

// 📚 Get Bestsellers
router.get("/bestsellers", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✍ Get Featured Authors
router.get("/authors", async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/publisher", async (req, res) => {
  try {
    const publishers = await Publisher.find(); // MongoDB se publishers fetch karna
    res.json(publishers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// router.get("/about-us", async (req, res) => {
//   try {
//     const aboutUsData = await AboutUs.findOne(); // Fetch About Us info
//     if (!aboutUsData) {
//       return res.status(404).json({ message: "About Us data not found" });
//     }
//     res.json(aboutUsData); // Send the About Us data
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.get("/about-us", getAboutUs);

// Route to update About Us data (Admin access required)
router.post("/admin/about-us", updateAboutUs);


module.exports = router;

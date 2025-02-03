const express = require("express");
const Location = require("../models/Location");
const Book = require("../models/Book");
const Author = require("../models/Author");
const AboutUs = require("../models/AboutUs");

const router = express.Router();

// 📍 Get All Locations
router.get("/locations", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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

router.get("/about-us", async (req, res) => {
  try {
    const aboutUsData = await AboutUs.findOne(); // Fetch About Us info
    if (!aboutUsData) {
      return res.status(404).json({ message: "About Us data not found" });
    }
    res.json(aboutUsData); // Send the About Us data
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;

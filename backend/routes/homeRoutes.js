const express = require("express");
const Location = require("../models/Location");
const Book = require("../models/Book");
const Author = require("../models/Author");
const Publisher = require("../models/Publisher");
const ExportInfo = require('../models/ExportInfo');
// const AboutUs = require("../models/AboutUs");
const SAgency = require("../models/SpecializedAgency");
const Branch = require("../models/Branch");
const ConferenceProceedings = require("../models/ConferenceProceedings");
const Management = require("../models/management");
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
router.get("/special-agency", async (req, res) => {
  try {
    const specialAgency = await SAgency.find();  
    res.json(specialAgency);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/export-info", async (req, res) => {
  try {
    const exportInfo = await ExportInfo.findOne(); // Fetch export info (assuming one document exists)
    res.json(exportInfo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/conference", async (req, res) => {
  try {
    const data = await ConferenceProceedings.findOne();
    if (!data) {
      return res.status(404).json({ message: "No data found" });
    }
    res.json(data);
  } catch (error) {
    console.error("Error fetching conference proceedings data:", error);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/management", async (req, res) => {
  try {
    const managementData = await Management.findOne();
    if (!managementData) {
      return res.status(404).json({ message: "Management data not found" });
    }
    res.json(managementData);
  } catch (error) {
    console.error("Error fetching management data:", error);
    res.status(500).json({ message: "Error fetching management data" });
  }
});
router.get("/contact", async (req, res) => {
  try {
    const branches = await Branch.find(); // Fetch all branches from the database
    res.json({ branches }); // Return the branches as JSON
  } catch (error) {
    console.error("Error fetching branch data:", error);
    res.status(500).json({ message: "Error fetching branch data" });
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

const Location = require("../models/Location");

// Get all locations
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new location
exports.addLocation = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Location name is required" });
    }

    const newLocation = new Location({ name });
    await newLocation.save();
    res.status(201).json({ message: "Location added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

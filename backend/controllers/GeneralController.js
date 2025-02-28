const General = require("../models/General");

// 📌 GET: Fetch data by type (e.g., locations, bestsellers, authors, etc.)
const getData = async (req, res) => {
  try {
    const type = req.params.type;
    const data = await General.find({ type });  // 👈 Type ke basis pe fetch ho raha hai
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


const addData = async (req, res) => {
  try {
    const { type, title, author, category, price, stock, description, coverImage } = req.body;
    
    const newEntry = new General({ type, title, author, category, price, stock, description, coverImage });
    await newEntry.save();
    
    res.status(201).json({ message: "Data added successfully", entry: newEntry });
  } catch (error) {
    res.status(400).json({ message: "Error adding data", error });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    await General.findByIdAndDelete(id);
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting data", error });
  }
};

module.exports = { getData, addData, deleteData };

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/Home";
import DistributionPage from "./components/Distribution/DistributionPage";
import SpecializedAgencies from "./components/SpecializedAgencies/SpecializedAgencies";
import ExportDPage from "./components/ExportDivision/ExportDivison";
import ContactPage from "./components/Contact/ContactPage";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/distribution" element={<DistributionPage />} />
        <Route path="/specialized-agencies" element={<SpecializedAgencies />} />
        <Route path="/export-division" element={<ExportDPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;



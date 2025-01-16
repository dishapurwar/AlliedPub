import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/Home";
import DistributionPage from "./components/Distribution/DistributionPage";
import SpecializedAgencies from "./components/SpecializedAgencies/SpecializedAgencies";
import ExportDPage from "./components/ExportDivision/ExportDivison";
import ContactPage from "./components/Contact/ContactPage";
import ConfPrec from "./components/ConfPrec/ConfPrec";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import Management from "./components/Management/management";
import BooksPage from "./components/Books/Book";
import AllAuthors from "./components/AllAuthors/AllAuthors";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/distribution" element={<DistributionPage />} />
        <Route path="/specialized-agencies" element={<SpecializedAgencies />} />
        <Route path="/export-division" element={<ExportDPage />} />
        <Route path="/conference" element={<ConfPrec />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/management" element={<Management />} />
        <Route path="/all-authors" element={<AllAuthors />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </Router>
  );
}

export default App;



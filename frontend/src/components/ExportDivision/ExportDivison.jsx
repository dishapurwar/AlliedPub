import React from 'react';
import './ExportDivision.css'; // Import the CSS file
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Fotter';

const ExportDPage = () => {
  return (
    <>
    <div id="head">
    <Navbar/>
    </div>
    <div className="export-d-page">
      <main className="export-d-details">
        <h2>Mr. Hemant Sharma</h2>
        <p>D-5, Sector-2</p>
        <p>Noida 201 301</p>
        <p>Uttar Pradesh</p>
        <p>
          <strong>Mobile:</strong> 8377849982
        </p>
        <p>
          <strong>Phone:</strong> 0120-2542557; 0120-4320295
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:delhi.books@alliedpublishers.com">
            delhi.books@alliedpublishers.com
          </a>
        </p>
      </main>
     <div id="foot">
       <Footer/>
     </div>
      </div>
    </>
  );
};

export default ExportDPage;

import React from 'react';
import './ConfPrec.css'; // Import the CSS file
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Fotter';

const ConfPrec = () => {
  return (
    <>
      <div id="head">
        <Navbar />
      </div>
      <div className="export-d-page">
        <main className="export-d-details">
          <h2>Mr. Jagdish Singh</h2>
          <p>Editorial Assistant</p>
          <p>D-5, Sector-2</p>
          <p>Noida 201 301</p>
          <p>Uttar Pradesh</p>
          <p>
            <strong>Mobile:</strong> 9899 33 5174; 8383 069 101
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:editorials@alliedpublishers.com">
              editorials@alliedpublishers.com
            </a>
          </p>
        </main>
        <div id="foot">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ConfPrec;

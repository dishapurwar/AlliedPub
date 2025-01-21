import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Fotter';
import './Contactpage.css';

const ContactPage = () => {
  return (
    <>
      <div id="head">
        <Navbar />
      </div>
      <div className="export-d-page">
        <main className="export-d-details">
          <h2>Branches</h2>

          {/* Delhi Office */}
          <section>
            <h3>Noida Office</h3>
            <ul>
              <li><strong>Address:</strong> D-5, Sector-2, Noida–201 301</li>
              <li><strong>Ph. Nos.:</strong> 0120-4320295 / 2542557 / 4352866</li>
              <li><strong>E-mail:</strong> <a href="mailto:delhi.books@alliedpublishers.com">delhi.books@alliedpublishers.com</a></li>
            </ul>
          </section>

          {/* Kolkata Office */}
          <section>
            <h3>Kolkata Office</h3>
            <ul>
              <li><strong>Address:</strong> 17 Chittaranjan Avenue, Kolkata–700072</li>
              <li><strong>Ph.:</strong> 033-22129618</li>
              <li><strong>E-mail:</strong> <a href="mailto:cal.books@alliedpublishers.com">cal.books@alliedpublishers.com</a></li>
            </ul>
          </section>

          {/* Mumbai Office */}
          <section>
            <h3>Mumbai Office</h3>
            <ul>
              <li><strong>Address:</strong> 15 J.N. Heredia Marg, Ballard Estate, Mumbai–400001</li>
              <li><strong>Ph.:</strong> 022-42126969</li>
              <li><strong>E-mail:</strong> <a href="mailto:mumbai.books@alliedpublishers.com">mumbai.books@alliedpublishers.com</a></li>
            </ul>
          </section>

          {/* Chennai Office */}
          <section>
            <h3>Chennai Office</h3>
            <ul>
              <li><strong>Address:</strong> No. 25/10, Commander-in-Chief Road, Ethiraj Lane (Next to Post Office), Egmore, Chennai–600008</li>
              <li><strong>Ph.:</strong> 044-28223938</li>
              <li><strong>E-mail:</strong> <a href="mailto:chennai.books@alliedpublishers.com">chennai.books@alliedpublishers.com</a></li>
            </ul>
          </section>

          {/* Bangalore Office */}

        </main>
    
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;

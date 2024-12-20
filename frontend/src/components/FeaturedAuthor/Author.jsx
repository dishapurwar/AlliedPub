import React from 'react';
import './Author.css'; // Make sure to link the CSS file

const FeaturedAuthor = () => {
  return (
    <>
    <div id="Author">
      <h1>
         Featured Author
      </h1>
      </div>
    <div className="author-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Amish_Tripathi.jpg"
        alt="Amish Tripathi"
        className="author-image"
      />
      <div className="author-info">
        <h1 className="author-name">Amish Tripathi</h1>
        <p className="author-description">
          Amish Tripathi is a contemporary Indian author known for his
          bestselling mythological fiction novels. His debut series, the
          Shiva Trilogy, has sold millions of copies and gained immense
          popularity. Amish combines history, mythology, and fiction to craft
          narratives that resonate with modern readers.
        </p>
        <div className="author-books">
          <h2>Notable Works</h2>
          <ul>
            <li>The Immortals of Meluha</li>
            <li>The Secret of the Nagas</li>
            <li>The Oath of the Vayuputras</li>
            <li>Ram: Scion of Ikshvaku</li>
          </ul>
          <button class='explore-btn'>
            Explore His Books <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </>
  );
};

export default FeaturedAuthor;

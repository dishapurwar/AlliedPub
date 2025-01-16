// // import React from 'react';
// // import './Author.css'; // Make sure to link the CSS file

// // const FeaturedAuthor = () => {
// //   return (
// //     <>
// //     <div id="Author">
// //       <h1>
// //          Featured Author
// //       </h1>
// //       </div>
// //     <div className="author-container">
// //       <img
// //         src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Amish_Tripathi.jpg"
// //         alt="Amish Tripathi"
// //         className="author-image"
// //       />
// //       <div className="author-info">
// //         <h1 className="author-name">Amish Tripathi</h1>
// //         <p className="author-description">
// //           Amish Tripathi is a contemporary Indian author known for his
// //           bestselling mythological fiction novels. His debut series, the
// //           Shiva Trilogy, has sold millions of copies and gained immense
// //           popularity. Amish combines history, mythology, and fiction to craft
// //           narratives that resonate with modern readers.
// //         </p>
// //         <div className="author-books">
// //           <h2>Notable Works</h2>
// //           <ul>
// //             <li>The Immortals of Meluha</li>
// //             <li>The Secret of the Nagas</li>
// //             <li>The Oath of the Vayuputras</li>
// //             <li>Ram: Scion of Ikshvaku</li>
// //           </ul>
// //           <button class='explore-btn'>
// //             Explore His Books <span className="arrow">→</span>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   </>
// //   );
// // };

// // export default FeaturedAuthor;

// import React, { useState, useEffect } from 'react';
// import './Author.css';

// // Author data array (5 authors)
// const authors = [
//   {
//     name: 'Jiggs Kalra',
//     image: 'https://images.herzindagi.info/image/2019/Jun/jiggs-kalra-passes-away.jpg',
//     description:
//       'Pioneer food columnist and culinary TV anchor, gastronome and food consultant, Jiggs Kalra has been consultant to various national and international hotels and hotel chains. He has conducted memorable Festival of India frequently both in India and abroad and is considered an Ambassador of Indian cuisine worldwide. Jiggs has been inducted into the International Foods and Beverage Forum Hall of Fame...',
//     notableWorks: ['Prashad: Cooking with Indian Masters', 'Classic Cooking of Avadh', 'Daawat: A Book of Indian Banquets'],
//   },
//   {
//     name: 'Shri Jagmohan',
//     image: 'https://th-i.thgim.com/public/news/national/other-states/k4fnr/article34482127.ece/alternates/FREE_1200/vbk-Jagmohan-PTI',
//     description:
//       'Shri Jagmohan is a truly many-splendoured personality. He has been an outstanding civil servant, Parliamentarian, Union Minister and original thinker and writer. Throughout his long and illustrious years in public service, he has worked with an unmatched passion, for creating a model of fair, just and effective governance....',
//     notableWorks: ['My Frozen Turbulence in Kashmir', 'Rebuilding Shahjahanabad: The Walled City of Delhi', 'Soul and Structure of Governance in India', 'Crisis of Environment and Climate Change'],
//   },
//   {
//     name: 'B.K.S. Iyengar',
//     image: 'https://cdn.britannica.com/64/181564-050-9853A763/BKS-Iyengar.jpg',
//     description:
//       'B.K.S. Iyengar was born in India in 1918 and started teaching yoga at the age of 17. He was one of the world’s leading teachers of yoga for over 70 years and was internationally recognized as a leading authority of hatha yoga. His own style of teaching, Iyengar Yoga, is followed by certified teachers across the world. Iyengar was the first person to teach yoga to large groups of students...',
//     notableWorks: ['Light on Yoga', 'Light on Pranayama', 'Light on the Yoga Sutras of Patanjali', 'The Art of Yoga'],
//   },
//   {
//     name: 'Geeta Iyengar',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJddbohGjwI-ru2y6fXBcOdoBzbk7bs28OFQ&s',
//     description:
//       'Geeta Iyengar has inherited the gift of Yoga from her distinguished father Shri B.K.S. Iyengar, who is a Yoga exponent of world repute, known for his vast knowledge of the subject and his performing skills.She had been teaching Yoga since 1962 in Pune. A graduate in Philosophy and Vaidya Visharad, her knowledge of Ayurveda blended with her knowledge of Yoga, makes her an expert guide for students. She is one of the partners of the Ramamani Iyengar Memorial Yoga Institute.',
//     notableWorks: ['Yoga: A Gem for Women', 'Yoga in Action – Preliminary Course'],
//   }
// ];

// const FeaturedAuthor = () => {
//   const [currentAuthor, setCurrentAuthor] = useState(null);

//   // Function to select a random author from the array
//   const selectRandomAuthor = () => {
//     const randomIndex = Math.floor(Math.random() * authors.length);
//     setCurrentAuthor(authors[randomIndex]);
//   };

//   useEffect(() => {
//     // Show a new random author when the user lands on the page
//     selectRandomAuthor();

//     // Set up an interval to change the author every 10 seconds
//     const interval = setInterval(() => {
//       selectRandomAuthor();
//     }, 10000);

//     // Clean up the interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   if (!currentAuthor) return null; // Ensure no rendering until an author is selected

//   return (
//     <>
//       <div id="Author">
//         <h1>Featured Author</h1>
//       </div>
//       <div className="author-container">
//         <img
//           src={currentAuthor.image}
//           alt={currentAuthor.name}
//           className="author-image"
//         />
//         <div className="author-info">
//           <h1 className="author-name">{currentAuthor.name}</h1>
//           <p className="author-description">{currentAuthor.description}</p>
//           <div className="author-books">
//             <h2>Notable Works</h2>
//             <ul>
//               {currentAuthor.notableWorks.map((work, index) => (
//                 <li key={index}>{work}</li>
//               ))}
//             </ul>
//             <button className="explore-btn">
//               Explore His/Her Books <span className="arrow">→</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeaturedAuthor;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Author.css';
import { useNavigate } from 'react-router-dom';

// Author data array (5 authors)
const authors = [
  // Existing authors array
  {
        name: 'Jiggs Kalra',
        image: 'https://images.herzindagi.info/image/2019/Jun/jiggs-kalra-passes-away.jpg',
        description:
          'Pioneer food columnist and culinary TV anchor, gastronome and food consultant, Jiggs Kalra has been consultant to various national and international hotels and hotel chains. He has conducted memorable Festival of India frequently both in India and abroad and is considered an Ambassador of Indian cuisine worldwide. Jiggs has been inducted into the International Foods and Beverage Forum Hall of Fame...',
        notableWorks: ['Prashad: Cooking with Indian Masters', 'Classic Cooking of Avadh', 'Daawat: A Book of Indian Banquets'],
      },
      {
        name: 'Shri Jagmohan',
        image: 'https://th-i.thgim.com/public/news/national/other-states/k4fnr/article34482127.ece/alternates/FREE_1200/vbk-Jagmohan-PTI',
        description:
          'Shri Jagmohan is a truly many-splendoured personality. He has been an outstanding civil servant, Parliamentarian, Union Minister and original thinker and writer. Throughout his long and illustrious years in public service, he has worked with an unmatched passion, for creating a model of fair, just and effective governance....',
        notableWorks: ['My Frozen Turbulence in Kashmir', 'Rebuilding Shahjahanabad: The Walled City of Delhi', 'Soul and Structure of Governance in India', 'Crisis of Environment and Climate Change'],
      },
      {
        name: 'B.K.S. Iyengar',
        image: 'https://cdn.britannica.com/64/181564-050-9853A763/BKS-Iyengar.jpg',
        description:
          'B.K.S. Iyengar was born in India in 1918 and started teaching yoga at the age of 17. He was one of the world’s leading teachers of yoga for over 70 years and was internationally recognized as a leading authority of hatha yoga. His own style of teaching, Iyengar Yoga, is followed by certified teachers across the world. Iyengar was the first person to teach yoga to large groups of students...',
        notableWorks: ['Light on Yoga', 'Light on Pranayama', 'Light on the Yoga Sutras of Patanjali', 'The Art of Yoga'],
      },
      {
        name: 'Geeta Iyengar',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJddbohGjwI-ru2y6fXBcOdoBzbk7bs28OFQ&s',
        description:
          'Geeta Iyengar has inherited the gift of Yoga from her distinguished father Shri B.K.S. Iyengar, who is a Yoga exponent of world repute, known for his vast knowledge of the subject and his performing skills.She had been teaching Yoga since 1962 in Pune. A graduate in Philosophy and Vaidya Visharad, her knowledge of Ayurveda blended with her knowledge of Yoga, makes her an expert guide for students. She is one of the partners of the Ramamani Iyengar Memorial Yoga Institute.',
        notableWorks: ['Yoga: A Gem for Women', 'Yoga in Action – Preliminary Course'],
      }
];

const FeaturedAuthor = () => {
  const [currentAuthor, setCurrentAuthor] = useState(null);
  const navigate = useNavigate();
  const handleViewAllAuthors = () => {
    navigate('/all-authors'); // Navigate to the desired route
  };
  // Function to select a random author from the array
  const selectRandomAuthor = () => {
    const randomIndex = Math.floor(Math.random() * authors.length);
    setCurrentAuthor(authors[randomIndex]);
  };

  useEffect(() => {
    // Show a new random author when the user lands on the page
    selectRandomAuthor();

    // Set up an interval to change the author every 10 seconds
    const interval = setInterval(() => {
      selectRandomAuthor();
    }, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (!currentAuthor) return null; // Ensure no rendering until an author is selected

  return (
    <>
      <div id="Author">
        <h1>Featured Author</h1>
      </div>
      <div className="author-container">
        <img
          src={currentAuthor.image}
          alt={currentAuthor.name}
          className="author-image"
        />
        <div className="author-info">
          <h1 className="author-name">{currentAuthor.name}</h1>
          <p className="author-description">{currentAuthor.description}</p>
          <div className="author-books">
            <h2>Notable Works</h2>
            <ul>
              {currentAuthor.notableWorks.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
            <button className="explore-btn">
              Explore His/Her Books <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="parent-container">
      <button className="view-all-link" onClick={handleViewAllAuthors}>
        View All Featured Authors →
      </button>
      </div>
    </>
  );
};

export default FeaturedAuthor;

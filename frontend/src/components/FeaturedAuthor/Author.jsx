// import React from 'react';
// import './Author.css'; // Make sure to link the CSS file

// const FeaturedAuthor = () => {
//   return (
//     <>
//     <div id="Author">
//       <h1>
//          Featured Author
//       </h1>
//       </div>
//     <div className="author-container">
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Amish_Tripathi.jpg"
//         alt="Amish Tripathi"
//         className="author-image"
//       />
//       <div className="author-info">
//         <h1 className="author-name">Amish Tripathi</h1>
//         <p className="author-description">
//           Amish Tripathi is a contemporary Indian author known for his
//           bestselling mythological fiction novels. His debut series, the
//           Shiva Trilogy, has sold millions of copies and gained immense
//           popularity. Amish combines history, mythology, and fiction to craft
//           narratives that resonate with modern readers.
//         </p>
//         <div className="author-books">
//           <h2>Notable Works</h2>
//           <ul>
//             <li>The Immortals of Meluha</li>
//             <li>The Secret of the Nagas</li>
//             <li>The Oath of the Vayuputras</li>
//             <li>Ram: Scion of Ikshvaku</li>
//           </ul>
//           <button class='explore-btn'>
//             Explore His Books <span className="arrow">→</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   </>
//   );
// };

// export default FeaturedAuthor;

import React, { useState, useEffect } from 'react';
import './Author.css';

// Author data array (5 authors)
const authors = [
  {
    name: 'Amish Tripathi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Amish_Tripathi.jpg',
    description:
      'Amish Tripathi is a contemporary Indian author known for his bestselling mythological fiction novels. His debut series, the Shiva Trilogy, has sold millions of copies and gained immense popularity. Amish combines history, mythology, and fiction to craft narratives that resonate with modern readers.',
    notableWorks: ['The Immortals of Meluha', 'The Secret of the Nagas', 'The Oath of the Vayuputras', 'Ram: Scion of Ikshvaku'],
  },
  {
    name: 'Chetan Bhagat',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chetan_Bhagat.jpg/1200px-Chetan_Bhagat.jpg',
    description:
      'Chetan Bhagat is a popular Indian author and columnist. His novels, often set in urban India, explore themes of love, relationships, and aspirations. Many of his books have been adapted into successful Bollywood films.',
    notableWorks: ['Five Point Someone', '2 States', 'Half Girlfriend', 'The Girl in Room 105'],
  },
  {
    name: 'Ruskin Bond',
    image: 'https://static.toiimg.com/thumb/msid-79855425,width-400,resizemode-4/79855425.jpg',
    description:
      'Ruskin Bond is an acclaimed Indian author of British descent. Known for his vivid storytelling, he has written numerous novels, short stories, and essays, often depicting life in the Himalayan foothills.',
    notableWorks: ['The Room on the Roof', 'A Flight of Pigeons', 'Delhi is Not Far', 'Rain in the Mountains'],
  },
  {
    name: 'Arundhati Roy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Arundhati_Roy_W.jpg/800px-Arundhati_Roy_W.jpg',
    description:
      'Arundhati Roy is an Indian author best known for her novel "The God of Small Things," which won the Man Booker Prize for Fiction. Apart from being a novelist, she is also a political activist and essayist.',
    notableWorks: ['The God of Small Things', 'The Ministry of Utmost Happiness'],
  },
  {
    name: 'R.K. Narayan',
    image: 'https://shwetawrites.com/wp-content/uploads/2014/10/narayan-r-k.jpg',
    description:
      'R.K. Narayan was one of India’s most celebrated authors, known for bringing Indian life and culture to global readers. His works are often set in the fictional town of Malgudi and reflect the nuances of everyday life.',
    notableWorks: ['Swami and Friends', 'The Guide', 'Malgudi Days', 'The Bachelor of Arts'],
  },
];

const FeaturedAuthor = () => {
  const [currentAuthor, setCurrentAuthor] = useState(null);

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
    </>
  );
};

export default FeaturedAuthor;


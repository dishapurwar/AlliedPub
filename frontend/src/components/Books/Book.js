


// import React, { useState } from 'react';
// import Navbar from '../Navbar/Navbar';
// import './Book.css';

// const BooksPage = () => {
//   const categories = [
//     'Agribusiness',
//     'Agricultural Economics',
//     'Agricultural Engineering',
//     'Agriculture',
//     'Agriculture Extension',
//     'Agriculture Statistics',
//     'Agronomy',
//     'Climate Change and Meteorology',
//     'Entomology',
//     'Horticulture and Pomology',
//   ];

//   const initialBooks = [
//     {
//       title: 'Metamorphosis by Franz Kafka [Premium Paperback]',
//       author: 'Franz Kafka',
//       format: 'Paperback',
//       price: 88,
//       mrp: 199,
//       discount: '56% off',
//       image: '/images/book2.jpg',
//     },
//     {
//       title: 'The Art of Letting Go: Move Beyond the Hurt, Find Emotional Freedom',
//       author: 'Nick Trenton',
//       format: 'Paperback',
//       price: 159,
//       mrp: 299,
//       discount: '47% off',
//       image: '/images/book3.jpg',
//     },
//     {
//       title: 'Advances in Mushroom Biotechnology',
//       author: 'M.C. Nair',
//       format: 'Hard Bound',
//       price: 120,
//       mrp: 250,
//       discount: '52% off',
//       image: '/images/book4.jpg',
//     },
//   ];

//   const [books, setBooks] = useState(initialBooks);
//   const [sortOption, setSortOption] = useState('');

//   // Sorting function
//   const handleSort = (option) => {
//     let sortedBooks = [...books];
//     if (option === 'title') {
//       sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (option === 'price') {
//       sortedBooks.sort((a, b) => a.price - b.price);
//     }
//     setBooks(sortedBooks);
//     setSortOption(option);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         {/* Sidebar for Categories */}
//         <div className="sidebar">
//           <h3>CATEGORIES</h3>
//           <ul>
//             {categories.map((category, index) => (
//               <li key={index}>{category}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Books Section */}
//         <div className="books-section">
//           <div className="sort-options">
//             <p>Sort By:</p>
//             <button
//               className={sortOption === 'title' ? 'active-sort' : ''}
//               onClick={() => handleSort('title')}
//             >
//               Title
//             </button>
//             <button
//               className={sortOption === 'price' ? 'active-sort' : ''}
//               onClick={() => handleSort('price')}
//             >
//               Price
//             </button>
//           </div>
//           {books.map((book, index) => (
//             <div className="book-card-horizontal" key={index}>
//               <img src={book.image} alt={book.title} className="book-image" />
//               <div className="book-details">
//                 <h4>{book.title}</h4>
//                 <p className="book-author">by {book.author}</p>
//                 <p className="book-format">{book.format}</p>
//                 <p className="book-price">
//                   ₹{book.price}{' '}
//                   <span className="mrp">
//                     M.R.P.: ₹{book.mrp}
//                   </span>{' '}
//                   <span className="discount">{book.discount}</span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default BooksPage;


import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Book.css';

const BooksPage = () => {
  const categories = [
    'Agribusiness',
    'Agricultural Economics',
    'Agricultural Engineering',
    'Agriculture',
    'Agriculture Extension',
    'Agriculture Statistics',
    'Agronomy',
    'Climate Change and Meteorology',
    'Entomology',
    'Horticulture and Pomology',
  ];

  const initialBooks = [
    {
      title: 'Microconomics',
      author: 'Franz Kafka',
      format: 'Paperback',
      price: 88,
      mrp: 199,
      discount: '56% off',
      category: 'Agribusiness',
      image: 'https://www.dropbox.com/scl/fi/0bgiqmy6n2zkp9km5dje1/01_Microconomics.jpg?rlkey=oyrppv2vduiuo3fjvsgf214uu&st=beyugsu0&raw=1',
    },
    {
      title: 'Children and Learning',
      author: 'Nick Trenton',
      format: 'Paperback',
      price: 159,
      mrp: 299,
      discount: '47% off',
      category: 'Agribusiness',
      image: 'https://www.dropbox.com/scl/fi/sfcoa05b8d7p6tl2md38l/02_Children-and-Learning.jpg?rlkey=lnlzrsoliec75yj2pj4731f6z&st=i6tihor9&raw=1',
    },
    {
      title: 'Advances in Fish Processing Technology',
      author: 'M.C. Nair',
      format: 'Hard Bound',
      price: 120,
      mrp: 250,
      discount: '52% off',
      category: 'Agricultural Economics',
      image: 'https://www.dropbox.com/scl/fi/pcswyc8m47b6txitbyrq8/03_Advances-in-Fish-Processing-Technology.jpg?rlkey=ts6nbx1ipjpvidb8k8zxibsw4&st=vvf78bdx&raw=1',
    },
    {
      title: 'Engineering Graphics with an Introduction to AutoCAD',
      author: 'M.C. Nair',
      format: 'Hard Bound',
      price: 120,
      mrp: 250,
      discount: '52% off',
      category: 'Agricultural Economics',
      image: 'https://www.dropbox.com/scl/fi/w5skm1xxyrt0ot2y6gwdu/04_Engineering-Graphics-with-an-Introduction-to-AutoCAD.jpg?rlkey=zcs9whv8jhq5xlvkfcqglxx20&st=061fgkug&raw=1',
    },
    {
      title: 'Bhagavad Gita',
      author: 'M.C. Nair',
      format: 'Hard Bound',
      price: 120,
      mrp: 250,
      discount: '52% off',
      category: 'Agricultural Economics',
      image: 'https://www.dropbox.com/scl/fi/3a8b7akgloj0h2n3oogru/05_Bhagavad-Gita.jpg?rlkey=jrg13xchrrpmaq739ap3nctw9&st=kpzagtvh&raw=1',
    },
    {
      title: 'PHANTOMS OF CHITTAGONG',
      author: 'M.C. Nair',
      format: 'Hard Bound',
      price: 120,
      mrp: 250,
      discount: '52% off',
      category: 'Agricultural Economics',
      image: 'https://www.dropbox.com/scl/fi/qwrp4pc1b5s2s89sso3b7/06_PHANTOMS-OF-CHITTAGONG.jpg?rlkey=rpchtn8i0q6weaantbd92nnff&st=vvvocoop&raw=1',
    },
    {
      title: 'The Real Ramakrishna',
      author: 'M.C. Nair',
      format: 'Hard Bound',
      price: 120,
      mrp: 250,
      discount: '52% off',
      category: 'Agricultural Economics',
      image: 'https://www.dropbox.com/scl/fi/7dch8xhy9e0pv29keu2jt/07_The-Real-Ramakrishna.jpg?rlkey=qj1zgdafe2tbwxctjcs5ecbx1&st=4bpo59nl&raw=1',
    },
    {
      title: 'Millets 2023 A Transdisciplinary Approach to its Resurgence and Sustainability',
      author: 'M.C. Nair',
      format: 'Hard Bound',
      price: 120,
      mrp: 250,
      discount: '52% off',
      category: 'Agricultural Economics',
      image: 'https://www.dropbox.com/scl/fi/8qvadqpnmmwjer2fddyno/08_Millets-2023-A-Transdisciplinary-Approach-to-its-Resurgence-and-Sustainability_cover_29-09-2023.jpg?rlkey=6f1w154rcmrcx213shzyufzic&st=0b713glt&raw=1',
    },
    {
      title: 'Water Security for Agriculture_Cover_14-05-2024_Curve_',
      author: 'M.C. Nair',
      format: 'Hard Bound',
      price: 120,
      mrp: 250,
      discount: '52% off',
      category: 'Agricultural Economics',
      image: 'https://www.dropbox.com/scl/fi/v4h8qbpgrbs61ewggqjz9/09_Water-Security-for-Agriculture_Cover_14-05-2024_Curve_.jpg?rlkey=2qhsar2fmg3mvs229a0p3msyf&st=aodgjid2&raw=1',
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Filter books based on selected category
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books;

  // Sorting function
  const handleSort = (option) => {
    let sortedBooks = [...filteredBooks];
    if (option === 'title') {
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === 'price') {
      sortedBooks.sort((a, b) => a.price - b.price);
    }
    setBooks(sortedBooks);
    setSortOption(option);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {/* Sidebar for Categories */}
        <div className="sidebar">
          <h3>CATEGORIES</h3>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(category)}
                style={{
                  fontWeight: selectedCategory === category ? 'bold' : 'normal',
                  textDecoration:
                    selectedCategory === category ? 'underline' : 'none',
                }}
              >
                {category}
              </li>
            ))}
          </ul>
          <button
            className="clear-category-btn"
            onClick={() => setSelectedCategory('')}
          >
            Show All Books
          </button>
        </div>

        {/* Books Section */}
        <div className="books-section">
          <div className="sort-options">
            <p>Sort By:</p>
            <button
              className={sortOption === 'title' ? 'active-sort' : ''}
              onClick={() => handleSort('title')}
            >
              Title
            </button>
            <button
              className={sortOption === 'price' ? 'active-sort' : ''}
              onClick={() => handleSort('price')}
            >
              Price
            </button>
          </div>

          {filteredBooks.length === 0 ? (
  <p className="no-books-message">No Books Found!</p>
) : (
  <div className="books-section"> 
    {filteredBooks.map((book, index) => (
      <div className="book-card-horizontal" key={index}>
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-details">
          <h4>{book.title}</h4>
          <p className="book-author">by {book.author}</p>
          <p className="book-format">{book.format}</p>
          <p className="book-price">
            ₹{book.price}{' '}
            <span className="mrp">M.R.P.: ₹{book.mrp}</span>{' '}
            <span className="discount">{book.discount}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
)}
</div>
</div>
    </>
  );
};

export default BooksPage;




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
      title: 'Metamorphosis by Franz Kafka [Premium Paperback]',
      author: 'Franz Kafka',
      format: 'Paperback',
      price: 88,
      mrp: 199,
      discount: '56% off',
      category: 'Agribusiness',
      image: '/images/book2.jpg',
    },
    {
      title: 'The Art of Letting Go: Move Beyond the Hurt, Find Emotional Freedom',
      author: 'Nick Trenton',
      format: 'Paperback',
      price: 159,
      mrp: 299,
      discount: '47% off',
      category: 'Agribusiness',
      image: '/images/book3.jpg',
    },
    {
      title: 'Advances in Mushroom Biotechnology',
      author: 'M.C. Nair',
      format: 'Hard Bound',
      price: 120,
      mrp: 250,
      discount: '52% off',
      category: 'Agricultural Economics',
      image: '/images/book4.jpg',
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
            filteredBooks.map((book, index) => (
              <div className="book-card-horizontal" key={index}>
                <img src={book.image} alt={book.title} className="book-image" />
                <div className="book-details">
                  <h4>{book.title}</h4>
                  <p className="book-author">by {book.author}</p>
                  <p className="book-format">{book.format}</p>
                  <p className="book-price">
                    ₹{book.price}{' '}
                    <span className="mrp">
                      M.R.P.: ₹{book.mrp}
                    </span>{' '}
                    <span className="discount">{book.discount}</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BooksPage;

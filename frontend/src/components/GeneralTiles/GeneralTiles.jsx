// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./GeneralTiles.css";

// const GeneralTiles = () => {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const [sortOption, setSortOption] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/home/general/book"); // Backend API
//         setBooks(response.data);
//         setFilteredBooks(response.data);
//       } catch (err) {
//         setError("Failed to fetch books");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBooks();
//   }, []);

//   useEffect(() => {
//     let updatedBooks = [...books];
//     if (categoryFilter) {
//       updatedBooks = updatedBooks.filter(book => book.category === categoryFilter);
//     }
//     setFilteredBooks(updatedBooks);
//   }, [categoryFilter, books]);

//   const handleSort = (option) => {
//     setSortOption(option);
//   };

//   const sortedBooks = [...filteredBooks].sort((a, b) => {
//     if (sortOption === "title") return a.title.localeCompare(b.title);
//     if (sortOption === "price") return a.price - b.price;
//     return 0;
//   });

//   if (loading) return <p>Loading books...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <select onChange={(e) => setCategoryFilter(e.target.value)}>
//         <option value="">All Categories</option>
//         <option value="Fiction">Fiction</option>
//         <option value="Non-Fiction">Non-Fiction</option>
//       </select>
//       <button onClick={() => handleSort("title")}>Sort by Title</button>
//       <button onClick={() => handleSort("price")}>Sort by Price</button>
//       <div>
//         {sortedBooks.map((book) => (
//           <div key={book.id}>
//             <h3>{book.title}</h3>
//             <p>Price: {book.price}</p>
//             <p>Category: {book.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GeneralTiles;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GeneralTiles.css";
import Navbar from "../Navbar/Navbar";

const GeneralTiles = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/home/general/book"); // Backend API
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (err) {
        setError("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    let updatedBooks = [...books];
    if (categoryFilter) {
      updatedBooks = updatedBooks.filter(book => book.category === categoryFilter);
    }
    setFilteredBooks(updatedBooks);
  }, [categoryFilter, books]);

  const handleSort = (option) => {
    setSortOption(option);
  };

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOption === "title") return a.title.localeCompare(b.title);
    if (sortOption === "price") return a.price - b.price;
    return 0;
  });

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <Navbar/>
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-100 min-h-screen">
      <div className="w-1/4 bg-teal-700 text-white p-5 rounded-xl shadow-lg h-fit">
        <h2 className="text-2xl font-bold border-b-2 border-white pb-2">
          CATEGORIES
        </h2>
        <select 
          className="w-full p-2 mt-3 bg-white text-black rounded-lg" 
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
        </select>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
          <p className="text-lg font-semibold">Sort by:</p>
          <button 
            className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={() => handleSort("title")}
          >
            Title
          </button>
          <button 
            className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={() => handleSort("price")}
          >
            Price
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedBooks.map((book) => (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden" key={book.id}>
              <img src={book.coverImage} alt={book.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{book.title}</h4>
                <p className="text-gray-600">Author: {book.author}</p>
                <p className="text-teal-700 font-semibold">Price: ₹{book.price}</p>
                <p className="text-gray-500">Category: {book.category}</p>
                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-1 bg-teal-600 text-white rounded-lg">Add to Cart</button>
                  <button className="px-3 py-1 bg-gray-300 rounded-lg">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default GeneralTiles;

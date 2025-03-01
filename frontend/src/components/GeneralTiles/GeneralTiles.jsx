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
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./GeneralTiles.css";
// import Navbar from "../Navbar/Navbar";

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
//     <>
//     <Navbar/>
//     <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-100 min-h-screen">
//       <div className="w-1/4 bg-teal-700 text-white p-5 rounded-xl shadow-lg h-fit">
//         <h2 className="text-2xl font-bold border-b-2 border-white pb-2">
//           CATEGORIES
//         </h2>
//         <select 
//           className="w-full p-2 mt-3 bg-white text-black rounded-lg" 
//           onChange={(e) => setCategoryFilter(e.target.value)}
//         >
//           <option value="">All Categories</option>
//     <option value="Agriculture & Earth Science">Agriculture & Earth Science</option>
//     <option value="Agriculture & Life Sciences">Agriculture & Life Sciences</option>
//     <option value="Earth Science">Earth Science</option>

//     <option value="Art and Craft">Art and Craft</option>
//     <option value="Astrology">Astrology</option>
//     <option value="Competitive Examination">Competitive Examination</option>
//     <option value="Cookery & Food Technology">Cookery & Food Technology</option>

//     <option value="Commerce">Commerce</option>
//     <option value="Business Studies & Management">• Business Studies & Management</option>
//     <option value="Commerce & Economics">• Commerce & Economics</option>

//     <option value="Demography">Demography</option>
//     <option value="Disaster Management">Disaster Management</option>
//     <option value="Ergonomics">Ergonomics</option>

//     <option value="India, The World & Miscellaneous Topics">India, The World & Miscellaneous Topics</option>
//     <option value="India">• India</option>
//     <option value="The World">• The World</option>

//     <option value="Industry">Industry</option>
//     <option value="Insurance">Insurance</option>
//     <option value="Military Affairs">Military Affairs</option>
//     <option value="Motivational and Self-help Books">Motivational and Self-help Books</option>
//     <option value="Oceanography">Oceanography</option>
//     <option value="Oil Exploration">Oil Exploration</option>
//     <option value="Pets">Pets</option>
//     <option value="Quality Control">Quality Control</option>

//     <option value="Science & Engineering">Science & Engineering</option>
//     <option value="Mathematics">• Mathematics</option>
//     <option value="Science and Technology">• Science and Technology</option>
//     <option value="Physics">• Physics</option>
//     <option value="Biological & Medical Sciences">• Biological & Medical Sciences</option>
//     <option value="Computer Science">• Computer Science</option>
//     <option value="Electronics, Electrical and Telecommunication Engineering">• Electronics, Electrical and Telecommunication Engineering</option>
//     <option value="Civil Engineering">• Civil Engineering</option>
//     <option value="Mechanical Engineering">• Mechanical Engineering</option>
//     <option value="Chemistry, Chemical Engineering & Polymer Science">• Chemistry, Chemical Engineering & Polymer Science</option>
//     <option value="Minerals & Metallurgical Engineering">• Minerals & Metallurgical Engineering</option>

//     <option value="Social Science">Social Science</option>
//     <option value="Political Science & International Relations">• Political Science & International Relations</option>
//     <option value="Communication Studies">• Communication Studies</option>
//     <option value="Public Administration">• Public Administration</option>
//     <option value="Sociology">• Sociology</option>
//     <option value="Psychology">• Psychology</option>
//     <option value="Biographies & Memoirs">• Biographies & Memoirs</option>
//     <option value="Language & Literature">• Language & Literature</option>
//     <option value="Philosophy & Religion">• Philosophy & Religion</option>
//     <option value="Energy and Environment">• Energy and Environment</option>
//     <option value="Library Science">• Library Science</option>
//     <option value="Law">• Law</option>
//     <option value="Education">• Education</option>
//     <option value="Dictionaries">• Dictionaries</option>

//     <option value="Transportation">Transportation</option>
//     <option value="Valuation">Valuation</option>
//     <option value="Water Management">Water Management</option>
//     <option value="Yoga">Yoga</option>
//         </select>
//       </div>
//       <div className="flex-1">
//         <div className="flex items-center gap-4 mb-4">
//           <p className="text-lg font-semibold">Sort by:</p>
//           <button 
//             className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
//             onClick={() => handleSort("title")}
//           >
//             Title
//           </button>
//           <button 
//             className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
//             onClick={() => handleSort("price")}
//           >
//             Price
//           </button>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {sortedBooks.map((book) => (
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden" key={book.id}>
//               <img src={book.coverImage} alt={book.title} className="w-full h-64 object-cover" />
//               <div className="p-4">
//                 <h4 className="text-xl font-bold">{book.title}</h4>
//                 <p className="text-gray-600">Author: {book.author}</p>
//                 <p className="text-teal-700 font-semibold">Price: ₹{book.price}</p>
//                 <p className="text-gray-500">Category: {book.category}</p>
//                 <div className="mt-3 flex gap-2">
//                   <button className="px-3 py-1 bg-teal-600 text-white rounded-lg">Add to Cart</button>
//                   <button className="px-3 py-1 bg-gray-300 rounded-lg">View Details</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default GeneralTiles;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GeneralTiles.css";
import Navbar from "../Navbar/Navbar";

const categories = {
  "Agriculture & Earth Science": ["Agriculture & Life Sciences", "Earth Science"],
  "Art and Craft": [],
  "Astrology": [],
  "Competitive Examination": [],
  "Cookery & Food Technology": [],
  "Commerce": ["Business Studies & Management", "Commerce & Economics"],
  "Demography": [],
  "Disaster Management": [],
  "Ergonomics": [],
  "India, The World & Miscellaneous Topics": ["India", "The World"],
  "Industry": [],
  "Insurance": [],
  "Military Affairs": [],
  "Motivational and Self-help Books": [],
  "Oceanography": [],
  "Oil Exploration": [],
  "Pets": [],
  "Quality Control": [],
  "Science & Engineering": [
    "Mathematics",
    "Science and Technology",
    "Physics",
    "Biological & Medical Sciences",
    "Computer Science",
    "Electronics, Electrical and Telecommunication Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Chemistry, Chemical Engineering & Polymer Science",
    "Minerals & Metallurgical Engineering"
  ],
  "Social Science": [
    "Political Science & International Relations",
    "Communication Studies",
    "Public Administration",
    "Sociology",
    "Psychology",
    "Biographies & Memoirs",
    "Language & Literature",
    "Philosophy & Religion",
    "Energy and Environment",
    "Library Science",
    "Law",
    "Education",
    "Dictionaries"
  ],
  "Transportation": [],
  "Valuation": [],
  "Water Management": [],
  "Yoga": []
};

const GeneralTiles = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/home/general/book");
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
    if (selectedCategory) {
      const subcategories = categories[selectedCategory];
      updatedBooks = updatedBooks.filter((book) =>
        subcategories.length > 0 ? subcategories.includes(book.category) : book.category === selectedCategory
      );
    }

    if (sortOption === "title-asc") {
      updatedBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "title-desc") {
      updatedBooks.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === "price-asc") {
      updatedBooks.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      updatedBooks.sort((a, b) => b.price - a.price);
    }

    setFilteredBooks(updatedBooks);
  }, [selectedCategory, books, sortOption]);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-100 min-h-screen">
        <div className="w-1/4 bg-teal-700 text-white p-5 rounded-xl shadow-lg h-fit">
          <h2 className="text-2xl font-bold border-b-2 border-white pb-2">CATEGORIES</h2>
          <ul className="mt-3">
            {Object.keys(categories).map((category) => (
              <li key={category} className="mt-2">
                <button
                  className={`w-full text-left p-2 rounded-lg ${selectedCategory === category ? "bg-teal-500" : "hover:bg-teal-600"}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
                {selectedCategory === category && categories[category].length > 0 && (
                  <ul className="ml-4 mt-2">
                    {categories[category].map((sub) => (
                      <li key={sub} className="mt-1">
                        <button
                          className="w-full text-left p-1 rounded-lg bg-white text-black hover:bg-gray-300"
                          onClick={() => setSelectedCategory(sub)}
                        >
                          {sub}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <div className="mb-4 flex justify-end">
            <select
              className="p-2 border rounded-lg"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="title-asc">Title (A-Z)</option>
              <option value="title-desc">Title (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div className="bg-white shadow-lg rounded-lg overflow-hidden" key={book.id}>
                <img src={book.coverImage} alt={book.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-bold">{book.title}</h4>
                  <p className="text-gray-600">Author: {book.author}</p>
                  <p className="text-teal-700 font-semibold">Price: ₹{book.price}</p>
                  <p className="text-gray-500">Category: {book.category}</p>
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
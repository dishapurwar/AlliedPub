// import React, { useState, useEffect } from "react";
// import "./Carousel.css";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const slidesData = [
//     {
//       title: "School Books",
//       imageUrl: "/images/college.jpg",
//     },
//     {
//       title: "College Books",
//       imageUrl: "/images/elementary.jpg",
//     },
//     {
//       title: "Elementary Books",
//       imageUrl: "/images/schoolbooks.jpg",
//     },
//   ];

//   // Include the duplicate slides for circular effect
//   const extendedSlides = [
//     slidesData[slidesData.length - 1], // Last slide (for backward looping)
//     ...slidesData,
//     slidesData[0], // First slide (for forward looping)
//   ];

//   const nextSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   };

//   const prevSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => prevIndex - 1);
//   };

//   useEffect(() => {
//     // Handle the circular loop
//     if (currentIndex === extendedSlides.length - 1) {
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentIndex(1); // Jump to the original first slide
//       }, 300); // Match the transition duration
//     } else if (currentIndex === 0) {
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentIndex(extendedSlides.length - 2); // Jump to the original last slide
//       }, 300); // Match the transition duration
//     } else {
//       setTimeout(() => setIsTransitioning(false), 300); // Match the transition duration
//     }
//   }, [currentIndex, extendedSlides.length]);

//   return (
//     <div className="carousel-container">
//       <div
//         className="carousel-track"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           transition: isTransitioning ? "transform 0.3s ease" : "none",
//         }}
//       >
//         {extendedSlides.map((slide, index) => (
//           <div
//             key={index}
//             className="carousel-slide"
//             style={{ backgroundImage: `url(${slide.imageUrl})` }}
//           >
//             <div className="carousel-overlay">
//               <h2 className="carousel-title">{slide.title}</h2>
//               <button className="know-more-btn">Know More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="carousel-btn prev" onClick={prevSlide}>
//         &#8592;
//       </button>
//       <button className="carousel-btn next" onClick={nextSlide}>
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default Carousel;


import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slidesData = [
    {
      imageUrl: "/images/college.jpg",
    },
    {
      imageUrl: "/images/elementary.jpg",
    },
    {
      imageUrl: "/images/schoolbooks.jpg",
    },
  ];

  // Include the duplicate slides for circular effect
  const extendedSlides = [
    slidesData[slidesData.length - 1], // Last slide (for backward looping)
    ...slidesData,
    slidesData[0], // First slide (for forward looping)
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    // Handle the circular loop
    if (currentIndex === extendedSlides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Jump to the original first slide
      }, 300); // Match the transition duration
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedSlides.length - 2); // Jump to the original last slide
      }, 300); // Match the transition duration
    } else {
      setTimeout(() => setIsTransitioning(false), 300); // Match the transition duration
    }
  }, [currentIndex, extendedSlides.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.3s ease" : "none",
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="carousel-overlay">
              <button className="know-more-btn">Know More</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#8592;
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;

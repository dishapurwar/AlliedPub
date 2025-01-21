// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Carousel.css";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const navigate = useNavigate();

//   const slidesData = [
//     {
//       imageUrl: "/images/Education.png",
//     },
//     {
//       imageUrl:
//         "https://images.gr-assets.com/misc/1687810670-1687810670_goodreads_misc.png",
//     },
//     {
//       imageUrl:
//         "https://www.cincinnati.com/gcdn/presto/2021/04/23/PCIN/840baf88-7347-4ebd-8615-c21be2cc766b-IMG_6057.jpeg",
//     },
//   ];

//   const handleKnowMoreClick = () => {
//     if (currentIndex === 3) {
//       // Redirect to the desired website if the third slide's button is clicked
//       window.location.href = "https://www.eupheus.in";
//     } else {
//       // Navigate to the default route for other slides
//       navigate("/books");
//     }
//   };

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
//           <div key={index} className="carousel-slide">
//             <img src={slide.imageUrl} alt={`Slide ${index}`} />
//             <div className="carousel-overlay">
//               <button className="know-more-btn" onClick={handleKnowMoreClick}>
//                 Know More
//               </button>
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
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useNavigate();

  const slidesData = [
    {
      imageUrl: "/images/education_main1.jpg",
    },
    {
      imageUrl:
        "https://images.gr-assets.com/misc/1687810670-1687810670_goodreads_misc.png",
    },
    {
      imageUrl:
        "https://www.cincinnati.com/gcdn/presto/2021/04/23/PCIN/840baf88-7347-4ebd-8615-c21be2cc766b-IMG_6057.jpeg",
    },
  ];

  const handleKnowMoreClick = () => {
    if (currentIndex === 3) {
      // Redirect to the desired website if the third slide's button is clicked
      window.location.href = "https://www.eupheus.in";
    } else {
      navigate("/books"); // Navigate to the default route for other slides
    }
  };

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
    <div className="carousel-wrapper">
      {/* Blurred Background */}
      <div
        className="carousel-background"
        style={{
          backgroundImage: `url(${slidesData[currentIndex - 1]?.imageUrl})`,
        }}
      ></div>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.3s ease" : "none",
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img src={slide.imageUrl} alt={`Slide ${index}`} />
              <div className="carousel-overlay">
                <button className="know-more-btn" onClick={handleKnowMoreClick}>
                  Know More
                </button>
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
    </div>
  );
};

export default Carousel;

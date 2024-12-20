import React from "react";
import "./Bestseller.css";
import { FaArrowRight } from "react-icons/fa"; 

const products = [
  { id: "blush", name: "A Court of Thorns and Roses", img: "https://storage.googleapis.com/du-prd/books/images/9781619634459.jpg" },
  { id: "concealer", name: "IKIGAI", img: "https://images.penguinrandomhouse.com/cover/9780143130727" },
  { id: "eyeliner", name: "THEY HUNT", img: "https://images-platform.99static.com//Q2Fwj5laXViAM8QtAGAfpxUyEYg=/fit-in/500x500/projects-files/152/15287/1528752/f86d06e9-f594-4207-99a3-ab29ac5bd86d.jpg" },
  { id: "eyeshadow", name: "HARRY POTTER", img: "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" },
  { id: "foundation", name: "The Plot", img: "https://celadonbooks.com/wp-content/uploads/2020/12/ThePlot-768x1167.jpg" },
  { id: "lipbalm", name: "HIDDEN POTENTIAL", img: "https://adamgrant.net/wp-content/uploads/2023/05/HiddenPo_9780593653142_jkt_front_r1B-477x720.jpg" },
];

const Bestsellers = () => {
  return (
    <div id="Bestsellers">
      <h1>
        {"BESTSELLERS".split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h1>
      <br />
      <br />
      <div id="images">
        {products.map((product) => (
          <div className="product" key={product.id} data-id={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="content" data-id={product.id}>
              <h2>{product.name}</h2>
            </div>
            <div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;

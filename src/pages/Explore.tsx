import React from "react";
import { Link } from "react-router-dom";
import rentCategory from "../assets/jpg/rentCategoryImage.jpg";
import sellCategory from "../assets/jpg/sellCategoryImage.jpg";
export function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>{/* Slider */}
      
      <p className="explore__categoryHeader">
        Categories
      </p>
      <div className="explore__catergories">
        <Link to="/category/rent">
          <img src={rentCategory} className="explore__categoriesImage" alt="rent" />
          <p>Places to rent</p>
        </Link>
        <Link to="/category/sale">
          <img src={sellCategory} className="explore__categoriesImage" alt="sale" />
          <p>Places for sale</p>

        </Link>
      </div>
      </main>
    </div>
  );
}

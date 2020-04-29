import React from "react";
import CategoryStyle from "./CategorieStyle.js";
import "../styles.css";

export default ({ category, imageURL, catDescription }) => {
  return (
    <div className="card">
    <div className="card-front">
        <img src={imageURL} alt="Category img" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">
            {category}
          </h2>
          <p>{catDescription}</p>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Cook {category}</button>
        </div>
      </div>
  </div>
  );
};

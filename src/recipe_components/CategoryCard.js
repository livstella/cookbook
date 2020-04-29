import React from "react";
import "../styles.css";

export default ({ category, imageURL, catDescription }) => {
  return (
    <div>
      <h1>{category}</h1>
      <img src={imageURL} alt="food img" />
      <p>{catDescription}</p>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Cook {category}
      </button>
    </div>
  );
};

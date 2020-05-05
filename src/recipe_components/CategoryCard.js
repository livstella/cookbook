import React from "react";
import { Link, useParams } from "react-router-dom";
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
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <Link className="link" to={`/categories/${category}`}>
              Cook {category}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./styles.css";

export default function RecipeStyle(props) {
  const { title, recipeUrl, imgSrc, description } = props;
  return (
    <div className="card">
      <img src={imgSrc} alt="food img" className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">
          {" "}
          <a href={recipeUrl}> {title}</a>{" "}
        </h2>

        <p>{description}</p>

        <a href={recipeUrl}>{title} and more recipes </a>
      </div>
    </div>
  );
}

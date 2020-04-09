import React from "react";
import "./styles.css";

export default function RecipeStyle(props) {
  const { title, imgSrc, ingredient, description } = props;
  return (
    <div>
      <h2> {title} </h2>
      <img src={imgSrc} alt="food img" />
      <ul>
        <li>{ingredient}</li>
      </ul>
      <p>{description}</p>
    </div>
  );
}

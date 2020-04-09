import React from "react";
import "./styles.css";

export default function RecipeStyle(props) {

  const { title, recipeUrl, imgSrc } = props;

  return (
    <div>
      <h2> {title} </h2>
      <img src={imgSrc} alt="food img" />

  <p><a href={recipeUrl}>Go to the recipe for {title}</a></p>

    </div>
  );
}

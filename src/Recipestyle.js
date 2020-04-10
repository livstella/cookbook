import React from "react";
import "./styles.css";

export default function RecipeStyle(props) {

  const { title, recipeUrl, imgSrc, deleteR, creditsText} = props;
  return (
    <div class="card">
        <img src={imgSrc} alt="food img" class="card-img-top"/>
          <div class="card-body">
            <h2 class="card-title"> {title} </h2>
  <p>A recipe from {creditsText}</p>
            <p><a href="recipeUrl">Go to the recipe for {title}</a></p>
            <button
              class="delete-button" 
              onClick={deleteR}> 
              Delete a recipe
          </button>
      </div>

    </div>
  );
}

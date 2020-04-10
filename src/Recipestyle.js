import React from "react";
import "./styles.css";


export default function RecipeStyle(props) {
  const { title, recipeUrl, imgSrc, deleteR, creditsText, index} = props;
  return (
    <div className="card">
        <img src={imgSrc} alt="food img" className="card-img-top"/>
          <div className="card-body">
            <h2 className="card-title"> {title} </h2>
            <p>A recipe from: {creditsText}</p>
            <p><a href={recipeUrl}>Go to the recipe for {title}</a></p>
            <button
              className="delete-button" 
              onClick={()=>deleteR(index)}> 
              Delete this recipe
          </button>

      </div>
    </div>
  );
}

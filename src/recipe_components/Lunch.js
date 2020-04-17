import React from "react";
import RecipeStyle from "./Recipestyle";
import RecipesData1 from "../database/RecipeData1";

export default function Lunch() {
  const recipeItems1 = RecipesData1.map((element, index) => {
    return (
      <div>
        <RecipeStyle
          key={index.id}
          title={element.title}
          imgSrc={element.image}
          description={element.description}
          recipeUrl={element.sourceUrl}
        />
      </div>
    );
  });
  return <div className="recipeWrapper">{recipeItems1}</div>;
}

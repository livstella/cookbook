import React from "react";
import RecipeStyle from "./Recipestyle";
import RecipesData2 from "../database/RecipeData2";

export default function Breakfast() {
  const recipeItems2 = RecipesData2.map((element, index) => {
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
  return <div className="recipeWrapper">{recipeItems2}</div>;
}

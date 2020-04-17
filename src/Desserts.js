import React from "react";
import RecipeStyle from "./Recipestyle";
import RecipesData3 from "./RecipeData3";

export default function Desserts() {
  const recipeItems3 = RecipesData3.map((element, index) => {
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
  return <div className="recipeWrapper flex-class">{recipeItems3}</div>;
}

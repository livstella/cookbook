import React, { useState, useEffect } from "react";
import RecipeStyle from "./Recipestyle";

export default function Desserts() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://floating-inlet-46173.herokuapp.com/recipe/")
      .then((result) => result.json())
      .then((finalResult) => {
        finalResult = finalResult.filter((recipe) => recipe.category === 5);
        setData(finalResult);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="recipeWrapper">
      {data &&
        data.map((element, index) => (
          <RecipeStyle
            key={index}
            title={element.name}
            imgSrc={element.imageurl}
            recipeDescription={element.description}
            recipeInstructions={element.instructions}
            recipeIngredients={element.ingredient_list}
            recipeMeasurements={[]}
          />
        ))}
    </div>
  );
}

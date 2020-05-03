import React, { useState, useEffect } from "react";
import client from "../contentful/index";
import RecipeStyle from "./Recipestyle";

export default function Desserts() {
  const [data, setData] = useState("");

  useEffect(() => {
    client
      .getEntries({ content_type: "meals", 'fields.category[match]': 'Dessert' })
      .then(entries => {
        setData(entries);
      })
      .catch(e => console.log(e));
  }, []);
  
  return (
    <div className="recipeWrapper">
      {data &&
        data.items.map((element, index) => (
          <RecipeStyle
            key={index}
            title={element.fields.recipeName}
            imgSrc={element.fields.image.fields.file.url}
            catDescription={element.fields.description}
            recipeInstructions={element.fields.instructions}
            recipeIngredients={element.fields.ingredients}
            recipeMeasurements={element.fields.measurements}
          />
        ))};
    </div>
  );
}

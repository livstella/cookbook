import React, { useState, useEffect } from "react";
import client from "../contentful/index";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import RecipeStyle from "./Recipestyle";

export default function RecipeByCategory() {
  const [data, setData] = useState("");
  let { category } = useParams();

  useEffect(() => {
    client
      .getEntries({ content_type: "meals", "fields.category[match]": category })
      .then(entries => {
        setData(entries);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="recipeWrapper">
      <div><h1>Let's cook some {category}</h1><hr /></div>
      {data &&
        data.items.map((element, index) => (
          <RecipeStyle
            key={index}
            title={element.fields.recipeName}
            imgSrc={element.fields.image.fields.file.url}
            recipeDescription={element.fields.description}
            recipeInstructions={element.fields.instructions}
            recipeIngredients={element.fields.ingredients}
            recipeMeasurements={element.fields.measurements}
          />
        ))}
    </div>
  );
};
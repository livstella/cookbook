import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://floating-inlet-46173.herokuapp.com/recipe/category")
      .then((result) => result.json())
      .then((finalResult) => {
        setData(finalResult);
        console.log(finalResult);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <div className="category-wrapper">
        {data &&
          data.map((element, index) => (
            <CategoryCard
              key={index}
              category={element.name}
              imageURL={element.imageurl}
              catDescription={element.description}
            />
          ))}
      </div>
    </div>
  );
}

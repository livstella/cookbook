import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {

          fetch("https://floating-inlet-46173.herokuapp.com/recipe")
          .then((res) => res.json())
          .then((res) => setData(res)
          )  
          .catch((error) => console.log(error))
  },[]);


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

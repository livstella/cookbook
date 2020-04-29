import React, { useState, useEffect } from "react";
import client from '../contentful/index';
import CategoryCard from "./CategoryCard"


export default function Categories(){
    
  const [data, setData] = useState("");
    
    useEffect(() => {
      client.getEntries({ content_type: 'categories' }).then((entries) => {
        setData(entries);
      });
    }, []);

  return (
    <div>
      <h1>Categories</h1>  
      <div className="category-wrapper">
      {data &&
        data.items.map((element, index) => (
          <CategoryCard
            key={index}
            category={element.fields.categoryName}
            imageURL={element.fields.image.fields.file.url}
            catDescription={element.fields.description}
          />
        ))} 
        </div>
    </div>)
}
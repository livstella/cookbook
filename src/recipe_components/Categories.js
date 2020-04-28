import React, { useState, useEffect } from "react";
import client from '../contentful/index';
import CategoryCard from "./CategoryCard"
import SearchResults from "./SearchResults";


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
      <p>Search Result Test:</p>
      <SearchResults/>

      
      {data &&
        data.items.map((element, index) => (
          <CategoryCard
            key={index}
            category={element.fields.categoryName}
            imageURL={element.fields.image.fields.file.url}
            catDescription={element.fields.description}
          />
        ))} 
    </div>)
}
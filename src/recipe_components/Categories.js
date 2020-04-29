import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard"
var contentful = require('contentful');

const contentfulSpaceId = 'nqclg9tj58dw';
const contentfulCdApiAccesstoken =
  'TwaQ7_8Cf1tObLkdCazTWMrUaU-0J-yhwYe_eYNnw98';

var client = contentful.createClient({
  space: contentfulSpaceId,
  accessToken: contentfulCdApiAccesstoken,
});

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
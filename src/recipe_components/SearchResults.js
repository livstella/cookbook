import React, {useState, useEffect} from 'react';
import client from '../contentful/index';
import RecipeStyle from "./Recipestyle";

export default function SearchResults(){
   
 return(

 <div className="category-wrapper"> {data && 
    data.items.map((element, index) => (
        <RecipeStyle
        key={index}
        title={element.fields.recipeName}
        imgSrc={element.fields.image.fields.file.url}
        description={element.fields.instructions}
      />  
    ))} 
    
   </div>)

};
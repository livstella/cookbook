import React, {useState, useEffect} from 'react';
import client from '../contentful/index';
import RecipeStyle from "./Recipestyle";

export default function SearchResults(){
    const searchTerm = 'chicken'

    const [data, setData] = useState("");
    
    useEffect(() => {
      client.getEntries({ 'query': searchTerm }).then((entries) => {
        setData(entries);
      })
      .catch(e => console.log("Error"))
    }, []);
 return(

 <div> {data && 
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
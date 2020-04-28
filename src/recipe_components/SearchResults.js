import React, {useState, useEffect} from 'react';
import client from '../contentful/index';

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
    <p>{element.fields.recipeName}</p>   
    ))} 
    
   </div>)

};
import React, { useState, useEffect } from "react";
import VeganCard from "./VeganCard";
import "../styles.css";
import RecipeStyle from "./Recipestyle";



export default function App() {
  const [data, setData] = useState("");

const idApi = "cb504780";
const Keys = "4691f222b5d4987a9e07ab08e4f52ebe";
const recipeApi =  `https://api.edamam.com/search?q=vegan&app_id=${idApi}&app_key=${Keys}`;
 
const fetchData  = () => {
  fetch(recipeApi)
  .then(res => res.json()) 
  .then(result => {
    setData(result.hits)
    console.log(result.hits)

  })

  .catch(err => console.log("error"))
  }


  useEffect(() => {
    fetchData()
  }, [])

function deleteHandler(index){
  setData(
      data.filter((element, filterIndex) => index !== filterIndex)
  )
}

  return (
    <div className="App">
      <div className = "recipeWrapper1">
         {data && data.map((element, index)=>(
          <VeganCard
            title = {element.recipe.label}
            onDelete={deleteHandler}
            image = {element.recipe.image}
            name = {element.recipe.source}
            index={index}
            key={index}
          />
          ))}
      </div>
    </div>
  );
}

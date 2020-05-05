import React, { useState } from "react";
import client from "../contentful/index";
import RecipeStyle from "./Recipestyle";
import { Link, Switch, Route } from "react-router-dom";
import "../styles.css";
// import SearchResults from "./SearchResults";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState("");

  function handleInputChange(event) {
    setSearchValue(event.target.value)
  }

  function handleSearch(e) {
    e.preventDefault();
    makeApiCall(searchValue);
    console.log(data);
    return (<div>
      <p>SHIT!!!!!!</p>
      <div className="category-wrapper"> {data &&
        data.items.map((element, index) => (
          <RecipeStyle
            key={index}
            title={element.fields.recipeName}
            imgSrc={element.fields.image.fields.file.url}
            description={element.fields.instructions}
          />  
        ))} 
  
       </div> 
       <div className="searchbar-wrapper">
       <form className="form-inline my-2 my-lg-0" id="search-field">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
    </div>)
    }

      </div> <form className="form-inline my-2 my-lg-0" id="search-field">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form></div>)
  }

  function makeApiCall(searchInput) {
    client.getEntries({
      "query": searchInput,
      content_type: "meals"
    }).then((entries) => {
      setData(entries);
    })
      .catch(e => console.log("Error"))
  }

  return (
    <div>
      <form className="form-inline my-2 my-lg-0"
        id="search-field"
        onSubmit={e => handleSearch(e)}>
        <input className="form-control mr-sm-2"
          type="search"
          placeholder="Show me recipes..."
          aria-label="Search"
          onChange={event => handleInputChange(event)}
          value={searchValue} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <div className="recipe-wrapper"> {data &&
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
    </div>
  );
};
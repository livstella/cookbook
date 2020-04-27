import React from "react";


export default ({ category, imageURL, catDescription }) => {
  return (
    <div>
    
          <h1>{category}</h1>
          <img src={imageURL}/>
          <p>{catDescription}</p>
       
    </div>
  );
};
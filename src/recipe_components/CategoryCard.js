import React from "react";
import CategoryStyle from "./CategorieStyle.js";



export default ({ category, imageURL, catDescription }) => {
  return (
    <div >
        <CategoryStyle
          category={category}
          imgURL={imageURL}
          catDescription={catDescription}
         />
    </div>
  );
};
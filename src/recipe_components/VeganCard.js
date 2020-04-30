import React from "react";
import "../styles.css";

export default function Recipe({title, image, name, index, onDelete}){
  return (
      
       <div className = "recipe">
            <img src = {image} alt="" className="image" />
           <h3 className = "title">{title}</h3>
           <h4 className = "name">{name}</h4>
           <button  type="button"  onClick={() => onDelete(index)} className="btn btn-danger delete">Delete</button>
       </div>
   )
}
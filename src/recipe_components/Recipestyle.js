import React from "react";
import "../styles.css";

export default function RecipeStyle(props) {
  const {
    title,
    recipeUrl,
    imgSrc,
    recipeDescription,
    recipeInstructions,
    recipeIngredients,
    recipeMeasurements
  } = props;
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={imgSrc} alt="food img" className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">
              <a href={recipeUrl}> {title}</a>{" "}
            </h2>
            <p className="recipe-description">{recipeDescription}</p>
            <a href={recipeUrl}>{title} and more recipes </a>
          </div>
        </div>
        <div className="card-back">
          <br />
          <br />
          <p>{recipeInstructions}</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Ingredients</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <td>{recipeIngredients ? recipeIngredients.map((ingredients, index) =>{
                return(
                  <tr>
                <td>{ingredients}</td>
              </tr>
                )
              }) : null}</td> 
              <td>{recipeMeasurements ? recipeMeasurements.map((measurements, index) =>{
                return(
                  <tr>
                <td>{measurements}</td>
              </tr>
                )
              }) : null}</td> 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

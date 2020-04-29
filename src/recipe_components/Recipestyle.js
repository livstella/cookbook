import React from "react";
import "../styles.css";

export default function RecipeStyle(props) {
  const { title, recipeUrl, imgSrc, description } = props;
  return (
    <div className="card">
      <div className="card-inner">
      <div className="card-front">
          <img src={imgSrc} alt="food img" className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">
              <a href={recipeUrl}> {title}</a>{" "}
            </h2>
            <p>{description}</p>
            <a href={recipeUrl}>{title} and more recipes </a>
          </div>
        </div>
        <div className="card-back">
          <br/><br/>
          <h3 > This is a test for the flip</h3>
            <p className="card-back-text"> Husbands ask repeated resolved but laughter debating. She end cordial visitor noisier fat subject general picture. Or if offering confined entrance no. Nay rapturous him see something residence. Highly talked do so vulgar. Her use behaved spirits and natural attempt say feeling. Exquisite mr incommode immediate he something ourselves it of. Law conduct yet chiefly beloved examine village proceed. Husbands ask repeated resolved but laughter debating. She end cordial visitor noisier fat subject general picture. Or if offering confined entrance no. Nay rapturous him see something residence. Highly talked do so vulgar. Her use behaved spirits and natural attempt say feeling. Exquisite mr incommode immediate he something ourselves it of. Law conduct yet chiefly beloved examine village proceed. 
            Husbands ask repeated resolved but laughter debating. She end cordial visitor noisier fat subject general picture. Or if offering confined entrance no. Nay rapturous him see something residence. Highly talked do so vulgar. Her use behaved spirits and natural attempt say feeling. Exquisite mr incommode immediate he something ourselves it of. Law conduct yet chiefly beloved examine village proceed. 
</p>
           <table class="table">
              <thead>
                <tr>
                  <th scope="col">Ingredient</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ingredient</td>
                  <td>Amount</td>
                </tr>
                <tr>
                <td>Ingredient</td>
                  <td>Amount</td>
                </tr>
                <tr>
                <td>Ingredient</td>
                  <td>Amount</td>
                </tr>
              </tbody>
            </table>
        </div>
        </div>
    </div>
  );
}

import React from "react";
import "./styles.css";

export default function App() {
  const imgsauce =
    "https://runningonrealfood.com/wp-content/uploads/2018/04/vegan-buffalo-cauliflower-wraps-1-of-12.jpg";

  return (
    <div className="OutterDiv">
      <h1>Hello CookSandbox</h1>
      <div className="Cookbook">
        <div className="card-deck">
          <div className="card" style={{ width: "30vw" }}>
            <span>
              {" "}
              <h3 className="card-title" id="wraps">
                <a href="https://runningonrealfood.com/vegan-buffalo-cauliflower-wraps/ ">
                  BUFFALO WRAPS
                </a>{" "}
              </h3>
            </span>
            <div className="hover"> Vegan, dinner </div>
            <a href="https://runningonrealfood.com/vegan-buffalo-cauliflower-wraps/">
              {" "}
              <img
                src={imgsauce}
                className="card-img-top"
                alt="Picture of wraps"
              />{" "}
            </a>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">1 head of cauliflower</li>
                <li className="list-group-item">3/4 cup flour</li>
                <li className="list-group-item">3/4 cup milk</li>
                <li className="list-group-item">
                  1/2 cup Frank’s Buffalo Sauce
                </li>
                <li className="list-group-item">1 package soft tofu</li>
                <li className="list-group-item">3 tbsp fresh lemon juice</li>
                <li className="list-group-item">1 tbsp apple cider vinegar</li>
                <li className="list-group-item">garlic powder</li>
                <li className="list-group-item">onion powder</li>
                <li className="list-group-item">parsley</li>
                <li className="list-group-item">kale or romaine lettuce</li>
                <li className="list-group-item">thinly sliced cucumber</li>
                <li className="list-group-item">carrot</li>
                <li className="list-group-item">sliced avocado</li>
                <li className="list-group-item">large tortillas</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="card" style={{ width: "30vw" }}>
            <span>
              {" "}
              <h3 className="card-title" id="wraps">
                <a href="https://runningonrealfood.com/vegan-buffalo-cauliflower-wraps/ ">
                  BUFFALO WRAPS
                </a>{" "}
              </h3>
            </span>
            <div className="hover"> Vegan, dinner </div>
            <a href="https://runningonrealfood.com/vegan-buffalo-cauliflower-wraps/">
              {" "}
              <img
                src={imgsauce}
                className="card-img-top"
                alt="Picture of wraps"
              />{" "}
            </a>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">1 head of cauliflower</li>
                <li className="list-group-item">3/4 cup flour</li>
                <li className="list-group-item">3/4 cup milk</li>
                <li className="list-group-item">
                  1/2 cup Frank’s Buffalo Sauce
                </li>
                <li className="list-group-item">1 package soft tofu</li>
                <li className="list-group-item">3 tbsp fresh lemon juice</li>
                <li className="list-group-item">1 tbsp apple cider vinegar</li>
                <li className="list-group-item">garlic powder</li>
                <li className="list-group-item">onion powder</li>
                <li className="list-group-item">parsley</li>
                <li className="list-group-item">kale or romaine lettuce</li>
                <li className="list-group-item">thinly sliced cucumber</li>
                <li className="list-group-item">carrot</li>
                <li className="list-group-item">sliced avocado</li>
                <li className="list-group-item">large tortillas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

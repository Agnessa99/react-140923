import React from "react";
import ReactDOM from "react-dom/client";
import {restaurants}  from "./constants/mock";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>{restaurants.map(elem=>{
    return (<ol>
     <li><h1>{elem.name}</h1>
      <p>
     {elem.menu.map}
     {elem.reviews.map}
      </p>
      </li>
    </ol>
    )
  })}</div>
);

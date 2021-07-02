import React from "react";
import Ingredients from "./Ingredients";

export default function IngredientsList({ list }) {
  return (
    <ul className="ingredients">
      {list.map((ingredient, index) => {
        <Ingredients key={index} {...ingredient} />
      })}
    </ul>
  );
}
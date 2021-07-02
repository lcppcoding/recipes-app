import React from "react";

export default function Ingredient({ name, measurement, amount }) {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
}
import React from "react";
import Card from "./Card.jsx"
function Body() {
  const year = new Date().getFullYear();
  return (
    <div>
      <Card />
    </div>
  );
}

export default Body;

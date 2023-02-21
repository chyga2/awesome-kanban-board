import React, { useState } from "react";


import "./Card.css";

function Card(props) {
  const { id, title } = props.card;
  return (
    <div>
      
        <div className="card_title">{title}</div>
       
    </div>
   );
}

export default Card;

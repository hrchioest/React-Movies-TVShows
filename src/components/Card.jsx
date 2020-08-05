import React from "react";
import "../sass/components/Card.scss";

const Card = () => {
  return (
    <div id='card'>
      <a href="#">
        <div className='img-card'></div>
        <h3 className='card-title'>Blade Runner</h3>
      </a>
    </div>
  );
};

export default Card;

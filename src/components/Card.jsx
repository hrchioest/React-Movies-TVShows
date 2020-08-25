import React from "react";
import "../sass/components/card.scss";


const Card = (props) => {

  return (
    <div id='card'>
      <div className='img-card'>
        <img src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + props.image} alt="poster"/>
      </div>
      <h3 className='card-title'>{props.s}</h3>
    </div>
  );
};

export default Card;

import React from "react";
import "../sass/components/card.scss";
import {Link} from "react-router-dom";




const Card = ({id, title, image, type}) => {

  
  return (

    <div id='card'>
      <div className='img-card'>
        <Link to ={`/${type}/${id}/info`}><img src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + image} alt="poster"/></Link>
      </div>
      <h3 className='card-title'>{title}</h3>
    </div>
  );
};

export default Card;


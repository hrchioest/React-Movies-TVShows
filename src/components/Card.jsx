import React from "react";
import "../sass/components/card.scss";
import {Link} from "react-router-dom";
import info from "./MovieInfo";



const Card = props => {

  
  return (
    <div id='card'>
      <div className='img-card'>
        <Link to ={`/${info.id}/info`}><img src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + props.image} alt="poster"/></Link>
      </div>
      <h3 className='card-title'>{props.title}</h3>
    </div>
  );
};

export default Card;

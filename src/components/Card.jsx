import React from "react";
import "../sass/components/card.scss";
import {Link} from "react-router-dom";
import notFound from "../images/notFound.jpeg";

const Card = ({id, title, image, type}) => {
  return (
    <div id='card'>
      <div className='img-card'>
        <Link to ={`/${type}/${id}/info`}><img src={image ? 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + image : notFound} alt={`Poster of "${title}"`}/></Link>
      </div>
      <h3 className='card-title'>{title}</h3>
    </div>
  );
};

export default Card;

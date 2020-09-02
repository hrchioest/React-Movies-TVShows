import React from "react";
import "../sass/components/card.scss";
import { Link } from 'react-router-dom';


const Card = ({image, title, id}) => {

  return (

    <div id='card'>
      <Link to={`/${id}/info`}>
        <div className='img-card'>
          <img src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + image} alt="poster" />
        </div>
        <h3 className='card-title'>{title}</h3>
    </Link>
    </div>
  );
};

export default Card;


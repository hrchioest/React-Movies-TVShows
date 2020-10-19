import React from "react";
import RedSocial from "./RedSocial";
import "../sass/components/movieInfo.scss";
import StarScore from "./StarScore";

const MovieInfo = ({
  information: {
    id,
    title,
    poster_path,
    vote_average,
    overview,
    runtime,
    genres,
    budget,
    revenue,
    production_companies
  }
}) => {
  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <span key={i} className='bttn accion'>
          {g.name}
        </span>
      );
    });
  }

  let productionList;
  if (production_companies) {
    productionList = production_companies.map((p, i) => {
      return <span key={i}>{p.name}, </span>;
    });
  }

  return (
    <div className='all'>
      <div className='container-movie'>
        <div className='img-poster'>
          <img
            alt='film'
            src={
              "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + poster_path
            }
          />
        </div>
        <div className='container-text'>
          <h2 className='title-movie'>{title}</h2>
          <div className='rating-movie'>
            <StarScore score={vote_average}></StarScore>
          </div>
          <p className='description-movie'>{overview}</p>
          <p className='duration-movie mgn-top'>Duración: {runtime} min.</p>
          <p className='gender-movie mgn-top'>Géneros:{genresList}</p>
          <p className='budget-movie mgn-top'>
            Presupuesto: ${Intl.NumberFormat().format(budget)}
          </p>
          <p className='collect-movie mgn-top'>Recaudación: ${revenue}</p>
          <p className='produ-movie mgn-top'>Producción: {productionList}</p>
          {id ? <RedSocial id={id} type='movie' /> : null}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;

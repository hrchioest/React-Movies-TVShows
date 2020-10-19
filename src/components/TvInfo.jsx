import React from "react";
import RedSocial from "./RedSocial";
import "../sass/components/movieInfo.scss";
import StarScore from "./StarScore";

const TvInfo = ({
  information: {
    id,
    name,
    poster_path,
    vote_average,
    overview,
    episode_run_time,
    genres,
    number_of_seasons,
    number_of_episodes,
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
          <h2 className='title-movie'>{name}</h2>
          <div className='rating-movie'>
            <StarScore score={vote_average}></StarScore>
          </div>
          <p className='description-movie'>{overview}</p>
          <p className='duration-movie mgn-top'>
            Temporadas: {number_of_seasons}
          </p>
          <p className='gender-movie mgn-top'>Episodios:{number_of_episodes}</p>
          <p className='budget-movie mgn-top'>
            Duración: {episode_run_time} min.
          </p>
          <p className='gender-movie mgn-top'>Géneros:{genresList}</p>
          <p className='produ-movie mgn-top'>Producción: {productionList}</p>
          {id ? <RedSocial id={id} type='tv' /> : null}
        </div>
      </div>
    </div>
  );
};

export default TvInfo;

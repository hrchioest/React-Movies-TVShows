import React from 'react';
import RedSocial from './RedSocial';
import '../sass/components/movieInfo.scss';
import StarScore from './StarScore';



const MovieInfo = ({id, title, poster, stars, overview, length, genres, budget, revenue, production }) =>{

    let genresList;
    if (genres) {
        genresList = genres.map((g, i) => {
            return (
                <a href="#" key={i} className="bttn accion">{g.name}</a>
            );
        });
    }

    let productionList;
    if (production) {
        productionList = production.map((p, i) => {
            return (
                <span key={i}>{p.name}, </span>
            );
        });
    }
    
    return(
        <div className="all">
            <div className="container-movie">
                <div className="img-poster">
                    <img alt="film" src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + poster}/>
                </div>
                <div className="container-text">
                    <h2 className="title-movie">{title}</h2>
                    <div className="rating-movie">
                        <StarScore score={stars}></StarScore>
                    </div>
                    <p className="description-movie">{overview}</p>
                    <p className="duration-movie mgn-top">Duración: {length} min.</p>
                    <p className="gender-movie mgn-top">Géneros:{genresList}</p>
                    <p className="budget-movie mgn-top">Presupuesto: ${Intl.NumberFormat().format(budget)}</p>
                    <p className="collect-movie mgn-top">Recaudación: ${revenue}</p>
                    <p className="produ-movie mgn-top">Producción: {productionList}</p>
                    <RedSocial />
                </div>
            </div>
        </div>
    )
}

export default MovieInfo; 


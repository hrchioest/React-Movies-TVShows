import React, { useParams } from 'react';
import '../sass/sections/movies.scss';
//import Hero from '../components/Hero';
import MenuHero from '../components/MenuHero';
//import MovieInfo from '../components/MovieInfo';

const Movies = props => {
    
    //let { id } = useParams();
    const {match} = props;
    const id = match.params.id;

    return (
        <div className="container-section">
            <h1>{id}</h1>
            <MenuHero id={id}/>    
        
        </div>
    )
}

export default Movies; 


//stars production, links redes soc

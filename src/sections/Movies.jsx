import React from 'react';
import '../sass/sections/movies.scss';
import Hero from '../components/Hero';
import MenuHero from '../components/MenuHero';
import MovieInfo from '../components/MovieInfo';

const Movies = () =>{
    return(
        <div className="container-section">
            <Hero />
            <MenuHero />
            <MovieInfo />
        </div>
    )
}

export default Movies; 
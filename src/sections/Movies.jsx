import React from 'react';
import '../sass/sections/movies.scss';
import Hero from '../components/Hero';
import MenuHero from '../components/MenuHero';
import MovieInfo from '../components/MovieInfo';
import Cast from '../components/Cast';

const Movies = () =>{
    return(
        <div className="container-section">
            <Hero/>
            <MenuHero/>
            <Cast/>
        </div>
    )
}

export default Movies; 
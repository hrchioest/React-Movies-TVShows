import React from 'react';
import '../sass/sections/Movies.scss';
import Hero from '../components/Hero';
import MenuHero from '../components/MenuHero';
import MovieInfo from '../components/MovieInfo';

const Movies = () =>{
    return(
        <div className="container-section">
            <Hero></Hero>
            <MenuHero></MenuHero>
            <MovieInfo></MovieInfo>
        </div>
    )
}

export default Movies; 
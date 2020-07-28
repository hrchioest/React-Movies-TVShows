import React from 'react';
import '../Sass/sections/Movies.scss';
import Hero from '../Components/Hero';
import MenuHero from '../Components/MenuHero';
import MovieInfo from '../Components/MovieInfo';

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

//no va <br>
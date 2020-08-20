import React from 'react';
import '../sass/sections/movies.scss';
import Hero from '../components/Hero';
import MenuHero from '../components/MenuHero';

const Movies = () =>{
    return(
        <div className="container-section">
            <Hero />
            <MenuHero />
        </div>
    )
}

export default Movies; 
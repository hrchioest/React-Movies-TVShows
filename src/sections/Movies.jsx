import React from 'react';
import '../sass/sections/movies.scss';
import MenuHero from '../components/MenuHero';


const Movies = props => {
    
    const {match} = props;
    const id = match.params.id;

    return (
        <div className="container-section">
            <MenuHero id={id}/>    
        </div>
    )
}

export default Movies; 



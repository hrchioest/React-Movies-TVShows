import React from 'react';
import Card from "./Card";

const SearchResults = ({ results }) =>{
    return(
        <div className="results">
            {results.map(movie =>(
                <Card image={movie.poster_path} title={movie.title}/>  //aca tendria que ser <Card
            ))}
        </div>
    );
}

export default SearchResults;
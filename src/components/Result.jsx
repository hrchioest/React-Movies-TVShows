import React from 'react';

const Result = ({ result }) =>{
    const imgURL = 'http://image.tmdb.org/t/p/original';
    return(
        <div className="container-result">
            <img src={` ${imgURL}${result.poster_path} `}/>
            <h2>{result.title}</h2>
        </div>
    )
}

export default Result; 
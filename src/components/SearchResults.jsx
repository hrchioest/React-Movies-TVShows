import { TRUE } from 'node-sass';
import React from 'react';
import "../sass/components/search.scss";
import Card from "./Card";

const SearchResults = ({ results, searchTerm }) =>{

    return(
        <section id="results">
            <div className="results-container">
                <h3 className="results-title">Resultados para:</h3>
                <div className="results-cards">
                    {results.map((result, r) =>(
                        //<div className="card-container">
                            <Card key={r} id={result.id} image={result.poster_path} title={result.title || result.name}/>
                        //</div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SearchResults;
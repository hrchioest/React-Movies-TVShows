import React from 'react';
import "../sass/components/search.scss";
import Card from "./Card";

const SearchResults = ({ results }) =>{

    return(
        <section id="results">
            <div className="results-container">
                <h3 className="results-title">Resultados para:</h3>
                <div className="results-cards">
                    {results.map(result =>(
                        <div className="card-container">
                            <Card key={result.id} image={result.poster_path} title={result.title || result.name}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SearchResults;

/*
const [searching, setSearching] = useState();

useEffect(() =>{
    console.log(`Resultados para:${searching}`)
})
*/
import React from 'react';
import Result from "./Result";

const Results = ({ results }) =>{
    return(
        <div className="results">
            {results.map(result =>(
                <Result result={result} />  //aca tendria que ser <Card
            ))}
        </div>
    )
}

export default Results;


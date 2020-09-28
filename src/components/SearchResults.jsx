import React from "react";
import "../sass/components/search.scss";
import Card from "./Card";

const SearchResults = ({ results, wordSearch }) => {
  return (
    <section id='results'>
      <div className='results-container'>
        <h3 className='results-title'>Resultados para: {wordSearch}</h3>
        <div className='results-cards'>
          {results.map((result, r) => (
            <Card
              key={r}
              type={result.media_type}
              id={result.id}
              image={result.poster_path}
              title={result.title || result.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;

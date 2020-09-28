import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  const { push } = useHistory();

  const pressSearch = (event) => {
    if (event.key === "Enter") {
      push(`/multi/${event.target.value}/page/1`);
    }
  };

  return (
    <div className='searcher-nav'>
      <input type='text' placeholder='Búsqueda...' onKeyPress={pressSearch} />
      <FontAwesomeIcon className='icons-search' icon={faSearch} />
    </div>
  );
};

export default SearchInput;

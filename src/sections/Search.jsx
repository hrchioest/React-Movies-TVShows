import React, { useState } from "react";
import axios from "axios";
import { multiSearch } from "../service/index";
import SearchResults from "../components/SearchResults";
import Pagination from "../components/Pagination";
import { useHistory, useParams } from "react-router-dom";

const Search = () => {
  const { wordSearch, numPage } = useParams();

  const { push } = useHistory();
  const [state, setState] = useState({
    results: [],
    totalResults: 0,
    currentPage: 1
  });

  React.useEffect(() => {
    axios(multiSearch + "&query=" + wordSearch + "&page=" + numPage).then(
      ({ data }) => {
        let results = data.results;
        setState((prevState) => {
          return {
            ...prevState,
            totalResults: data.total_results,
            results: results,
            currentPage: parseInt(numPage)
          };
        });

        window.scrollTo(0, 0);
      }
    );
  }, [wordSearch, numPage]);

  const nextPage = (numberPage) => {
    push(`/multi/${wordSearch}/page/${numberPage}`);
  };

  const numberPages = Math.floor(state.totalResults / 20);

  return (
    <>
      <SearchResults results={state.results} wordSearch={wordSearch} />
      {state.totalResults > 20 ? (
        <Pagination
          pages={numberPages}
          nextPage={nextPage}
          currentPage={state.currentPage}
        />
      ) : null}
    </>
  );
};
export default Search;

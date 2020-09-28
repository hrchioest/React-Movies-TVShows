import React, {useState} from "react";
import axios from 'axios';
import { multiSearch } from "../service/index";
import Header from "./Header";
import SearchResults from "../components/SearchResults";
import Pagination from "../components/Pagination";

const Search = () =>{

    const [state,setState] = useState({
        searchTerm: "",
        results: [],
        totalPages: 0,
        currentPage: 1,
        
    });
    
    const search = (e) =>{ 
        if(e.key  === "Enter"){
          axios(multiSearch + '&query=' + state.searchTerm).then(({data})=>{    
            let results = data.results;
    
            setState(prevState =>{
              return{...prevState, results : results, totalPages: data.total_results}
            })
          });
        }
    }

    const handleInput = (e)=>{
        let searchTerm = e.target.value
    
        setState(prevState =>{
          return{...prevState, searchTerm: searchTerm }
        });
    }

    const nextPage = (pageNumb) =>{
        axios(multiSearch + '&query=' + state.searchTerm + '&page=' + pageNumb).then(({data})=>{    
          let results = data.results;
    
          setState(prevState =>{
            return{...prevState, results : results, currentPage : pageNumb}
          })
        });
    }

    const numberPages = Math.floor(state.totalPages / 20)

    return(
        <>
            <Header handleInput={handleInput} search={search} />
            <SearchResults results={state.results}/>
            {state.totalPages > 20 ? <Pagination pages={numberPages} nextPage={nextPage} currentPage={state.currentPage}/> : ""}
        </>
    );
}

export default Search;
import React, {useState} from "react";
import axios from 'axios';
import { multiSearch } from "./service/index";

import Header from "./sections/Header";
import SearchResults from "./components/SearchResults";
import Home from "./sections/Home";
import Movie from "./sections/Movie";
import Tv from "./sections/Tv";
import ListAll from "./sections/ListAll";
import ContainerInfo from "./components/ContainerInfo";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pagination from "./components/Pagination";


function App() {

  const [state,setState] = useState({
    searchTerm:"",
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
 
  return (
    <Router>
      <div className='App'>
        <Header handleInput={handleInput} search={search} />
        <SearchResults results={state.results} />
        {state.totalPages > 20 ? <Pagination pages={numberPages} nextPage={nextPage} currentPage={state.currentPage}/> : ""}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/tv" component={Tv} />
          <Route exact path="/:seccion/trending" component={ListAll} />
          <Route exact path="/:type/:id/info" component={ContainerInfo} />
          <Route exact path="/:type/:id/reparto" component={ContainerInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

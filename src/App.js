import React, {useState} from "react";
import axios from 'axios';
import Header from "./sections/Header";
import Home from "./sections/Home";
import Movie from "./sections/Movie";
import Tv from "./sections/Tv";
import ListAll from "./sections/ListAll";
import { multiSearch } from "./service/index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchResults from "./components/SearchResults";
import Movies from "./sections/Movies";

function App() {

  const [state,setState] = useState({
    s:"",
    results: []
  });

  const search = (e) =>{ 
    if(e.key  === "Enter"){
      axios(multiSearch + '&query=' + state.s).then(({data})=>{    
        let results = data.results;

        setState(prevState =>{
          return{...prevState, results : results}
        })
      });
    }
  }

  const handleInput = (e)=>{
    let s = e.target.value

    setState(prevState =>{
      return{...prevState, s: s }
    });
  }

  return (
    <Router>
      <div className='App'>
        <Header handleInput={handleInput} search={search} />
        <SearchResults results={state.results} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/tv" component={Tv} />
          <Route exact path="/:seccion/trending" component={ListAll} />
        </Switch>
        <Movies/>
      </div>
    </Router>
  );
}

export default App;

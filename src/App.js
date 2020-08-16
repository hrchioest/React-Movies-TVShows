import React , {useState} from "react";
import axios from 'axios';

import Header from "./sections/Header";
import Results from "./components/Results";
import Home from "./sections/Home";

import Movies from "./sections/Movies";
import Temporadas from "./sections/Temporadas";
import Videos from "./sections/Videos";

import "./App.scss";


function App() {

  const [state,setState] = useState({
    s:"",
    results: []
  });

  const apiurl = "https://api.themoviedb.org/3/search/multi?api_key=f1116d96306803726f99db84a5974c4b";

  const search = (e) =>{ 
    if(e.key  === "Enter"){
      axios(apiurl + '&query=' + state.s).then(({data})=>{    
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
    <div className='App'>
      <Header handleInput={handleInput} search={search}/>
      <Results results={state.results}/>
      <Home />
      <Movies />
      <Temporadas />
      <Videos />
    </div>
  );
}

export default App;

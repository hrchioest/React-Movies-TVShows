import React from "react";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Movie from "./sections/Movie";
import Tv from "./sections/Tv";
import ListAll from "./sections/ListAll";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/tv" component={Tv} />
          <Route exact path="/:seccion/trending/page/:page" component={ListAll} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

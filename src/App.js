import React from "react";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Movie from "./sections/Movie";
import Tv from "./sections/Tv";
import Movies from "./sections/Movies"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie" component={Movie} />
          <Route path="/tv" component={Tv} />
        </Switch>
      </div>
      <Movies/>
    </Router>
  );
}

export default App;

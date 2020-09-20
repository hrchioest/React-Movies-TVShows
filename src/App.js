import React from "react";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Movie from "./sections/Movie";
import Tv from "./sections/Tv";
import ListAll from "./sections/ListAll";
import ContainerInfo from "./components/ContainerInfo";
import Footer from "./sections/Footer";
import Similar from "./components/Similar";
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
          <Route exact path="/:seccion/trending" component={ListAll} />
          <Route exact path="/:type/:id/info" component={ContainerInfo} />
          <Route exact path="/:type/:id/reparto" component={ContainerInfo} />
          <Route exact path="/:type/:id/similares" component={Similar} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

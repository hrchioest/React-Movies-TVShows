import React from "react";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Movie from "./sections/Movie";
import Tv from "./sections/Tv";
import Footer from "./sections/Footer";
import ListAll from "./sections/ListAll";
import Search from "./sections/Search";
import ContainerInfo from "./components/ContainerInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movie' component={Movie} />
          <Route exact path='/tv' component={Tv} />
          <Route
            exact
            path='/multi/:wordSearch/page/:numPage'
            component={Search}
          />
          <Route
            exact
            path='/:seccion/trending/page/:numPage'
            component={ListAll}
          />
          <Route path='/:type/:id' component={ContainerInfo} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

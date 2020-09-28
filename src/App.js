import React from "react";
import Home from "./sections/Home";
import Movie from "./sections/Movie";
import Tv from "./sections/Tv";
import ListAll from "./sections/ListAll";
import ContainerInfo from "./components/ContainerInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./sections/Search";

// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "./sections/Header";

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
          <Route exact path='/:seccion/trending' component={ListAll} />
          <Route path='/:type/:id' component={ContainerInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

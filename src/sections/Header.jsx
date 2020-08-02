import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import Movie from "./Movie";
import Tv from "./Tv";


const Header = () => {
  return (
    <nav id='header-nav'>
      <div className='access-nav'>
        <Router>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon className='icons-nav' icon={faHome} />
              </Link>
            </li>
            <li>
              <Link to="/Movie">
                <FontAwesomeIcon className='icons-nav' icon={faVideo} />
              </Link>
            </li>
            <li>
              <Link to="/Tv">
                <FontAwesomeIcon className='icons-nav' icon={faTv} />
              </Link>
            </li>
          </ul>


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movie">
              <Movie />
            </Route>
            <Route path="/tv">
              <Tv />
            </Route>
          </Switch>

        </Router>
      </div>

      <div className='searcher-nav'>
        <FontAwesomeIcon className='icons-nav' icon={faSearch} />
        <input type='text' placeholder='Búsqueda...' />
      </div>
    </nav>
  );
};

export default Header;




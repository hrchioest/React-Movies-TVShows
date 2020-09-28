import React from "react";
import '../sass/sections/header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const Header = ({ handleInput, search }) => {

  return (
    <nav id='header-nav'>
      <div className='access-nav'>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active-access" >
              <FontAwesomeIcon className='icons-nav' icon={faHome} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/movie" exact activeClassName="active-access" >
              <FontAwesomeIcon className='icons-nav' icon={faVideo} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/tv" exact activeClassName="active-access" >
              <FontAwesomeIcon className='icons-nav' icon={faTv} />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='searcher-nav'>
        <FontAwesomeIcon className='icons-nav' icon={faSearch} />
        <input type='text' placeholder='Búsqueda...' onChange={handleInput} onKeyPress={search}/> 
      </div>
    </nav>
  );
};

export default Header;

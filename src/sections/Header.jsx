import React from 'react';
import "../sass/sections/Header.scss";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <nav id='header-nav'>
      <div className='access-nav'>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active-access">
                <FontAwesomeIcon className='icons-nav' icon={faHome} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/Movie" activeClassName="active-access">
                <FontAwesomeIcon className='icons-nav' icon={faVideo} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/Tv" activeClassName="active-access">
                <FontAwesomeIcon className='icons-nav' icon={faTv} />
              </NavLink>
            </li>
          </ul>
      </div>

      <div className='searcher-nav'>
        <FontAwesomeIcon className='icons-nav' icon={faSearch} />
        <input type='text' placeholder='Búsqueda...' />
      </div>
    </nav>
  );
};

export default Header;




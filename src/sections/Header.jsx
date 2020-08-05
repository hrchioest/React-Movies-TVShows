import React from 'react';
import "../sass/sections/Header.scss";
import { Link } from 'react-router-dom';
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
      </div>

      <div className='searcher-nav'>
        <FontAwesomeIcon className='icons-nav' icon={faSearch} />
        <input type='text' placeholder='Búsqueda...' />
      </div>
    </nav>
  );
};

export default Header;




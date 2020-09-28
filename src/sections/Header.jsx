import React from "react";
import "../sass/sections/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import SearchInput from "../components/SearchInput";

const Header = () => {
  return (
    <nav id='header-nav'>
      <div className='access-nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active-access'>
              <FontAwesomeIcon className='icons-nav' icon={faHome} />
            </NavLink>
          </li>
          <li>
            <NavLink to='/movie' exact activeClassName='active-access'>
              <FontAwesomeIcon className='icons-nav' icon={faVideo} />
            </NavLink>
          </li>
          <li>
            <NavLink to='/tv' exact activeClassName='active-access'>
              <FontAwesomeIcon className='icons-nav' icon={faTv} />
            </NavLink>
          </li>
        </ul>
      </div>
      <SearchInput />
    </nav>
  );
};

export default Header;

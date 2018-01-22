import React from 'react';
import { Link } from 'react-router-dom';

//import styles
import './header.css';

//import components
import Dropdown from './dropdown';
import SearchInput from './search-input';

const Header = () => (

  <div className="header">
    <Link to="/" className="logo">Netflix</Link>
    <ul className="nav nav-primary">
      <li className="nav__item nav__item--selected">Inicio</li>
      <li className="nav__item">Series</li>
      <li className="nav__item">Peliculas</li>
      <li className="nav__item">Originales</li>
      <li className="nav__item">Añadidos Recientemente</li>
      <li className="nav__item">Mi lista</li>
    </ul>
    <div className="nav nav-secondary">
      <SearchInput />
      <div className="nav__item"><i className="fa fa-bell" aria-hidden="true"></i></div>
      <Dropdown />
    </div>
  </div>

);

export default Header;

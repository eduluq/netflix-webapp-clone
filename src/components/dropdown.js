import React, { Component } from 'react';

//import styles
import './dropdown.css';

//import components
import Avatar from './avatar'

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({isActive: !prevState.isActive}));
  }

  render() {

    let dropdownMenuClasses = ["dropdown__menu"];
    if(this.state.isActive) {
      dropdownMenuClasses.push("active");
    }

    return (
      <div className="nav__item dropdown">
        <div className="dropdown__action" onClick={this.toggle}>
          <Avatar picture="https://api.adorable.io/avatars/64/1.png" />
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div className={dropdownMenuClasses.join(' ')}>
          <i className="fa fa-caret-up" aria-hidden="true"></i>
          <ul>
            <li className="dropdown__menu__item">
              <Avatar picture="https://api.adorable.io/avatars/64/1.png"/>
              Edu
            </li>
            <li className="dropdown__menu__item">
              <Avatar picture="https://api.adorable.io/avatars/64/2.png"/>
              Benzema
            </li>
            <li className="dropdown__menu__item">
              <Avatar picture="https://api.adorable.io/avatars/64/3.png"/>
              Los pelis
            </li>
            <li className="dropdown__menu__item">
              <Avatar picture="https://api.adorable.io/avatars/64/4.png"/>
              Doug the Pug
            </li>
            <li className="dropdown__menu__item dropdown__menu__item--settings">Administrar Perfiles</li>
            <hr className="dropdown__menu__separator"/>
            <li className="dropdown__menu__item dropdown__menu__item--settings">Cuenta</li>
            <li className="dropdown__menu__item dropdown__menu__item--settings">Centro de ayuda</li>
            <li className="dropdown__menu__item dropdown__menu__item--settings">Cerrar sesión en Netflix</li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Dropdown;

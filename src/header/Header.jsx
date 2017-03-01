import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <div className="App-header-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <span>Robotois</span>
          </div>
          <div className="spacer"></div>
          <div className="App-header-actions">
            <span>Plataforma</span>
            <span>Videos</span>
            <span>Soluciones</span>
            <div> Ordenar </div>
          </div>
        </header>
    );
  }
}

export default Header;

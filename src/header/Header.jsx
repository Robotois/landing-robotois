import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import { browserHistory } from 'react-router'


class Header extends Component {
  redirectToVideos(path) {
    browserHistory.push(path);
  }
  redirectToApp() {
    // window.open('http://robotois.com/app', '_blank');
  }
  render() {
    return (
        <header className="App-header">
          <div className="App-header-logo" onClick={this.redirectToVideos.bind(this, '/')}>
            <img src={logo} className="App-logo" alt="logo" />
            <span>Robotois</span>
          </div>
          <div className="spacer"></div>
          <div className="App-header-actions">
            <span className="App-header-app-link" onClick={this.redirectToApp}>Plataforma</span>
            {/*<span onClick={this.redirectToVideos.bind(this, '/videos')}>Videos</span>*/}
            {/*<span>Soluciones</span>*/}
            <div> Ordenar </div>
          </div>
        </header>
    );
  }
}

export default Header;

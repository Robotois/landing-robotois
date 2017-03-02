import React, { Component } from 'react';
import logo from './images/logo-footer.svg';
import youtube from './images/youtube.svg';
import github from './images/github.svg';
import twitter from './images/twitter.svg';
import fb from './images/fb.svg';


class Footer extends Component {
  redirectLink(type) {
    const redirects = {
      github: 'https://github.com/Robotois',
      twitter: 'https://twitter.com/robotois',
      facebook: 'https://www.facebook.com/robotois/',
      youtube: 'https://www.youtube.com/channel/UC1B5gv23Aw8tJaWnJQ8nnhQ'
    }
    window.open(redirects[type], '_blank');
  }
  render() {
    return (
      <footer className="App-footer">
        <section className="App-footer-copyrights">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Robotois ©</span>
        </section>
        <section className="App-footer-links">
          <span className="App-footer-links-title">Info</span>
          <span>Comprar</span>
          <span>Plataforma</span>
        </section>
        <section className="App-footer-links">
          <span className="App-footer-links-title">Legal</span>
          <span>Terminos y condiciones</span>
          <span>Aviso de privacidad</span>
        </section>
        <section className="App-footer-social">
          <span>Sigue a Robotois</span>
          <div className="icons">
            <img src={youtube} className="App-logo" alt="github" onClick={this.redirectLink.bind(this,'youtube')}/>
            <img src={github} className="App-logo" alt="github" onClick={this.redirectLink.bind(this,'github')}/>
            <img src={twitter} className="App-logo" alt="twitter" onClick={this.redirectLink.bind(this,'twitter')}/>
            <img src={fb} className="App-logo" alt="facebook" onClick={this.redirectLink.bind(this,'facebook')}/>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;

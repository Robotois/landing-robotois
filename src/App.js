import React, { Component } from 'react';
import './App.css';
import './Responsive.css';
import play from './images/play.svg';
import pi3 from './images/pi-3.png';
import shield from './images/shield.png';
import sensores from './images/sensores.png';
import actuadores from './images/actuadores.png';
import motores from './images/motores.png';
import visualEditor from './images/visualeditor.png';
import config from './images/config.png';
import coding from './images/coding.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-video-container">
          <img src={play} alt="play" />
          <span className="App-video-container-slogan"> aprende | programa | construye </span>
          <span className="App-video-container-slogan-small">Aprende electrónica de una manera divertida.</span>
          <span className="App-video-container-question">¿Que es Robotois?</span>
          <span className="App-video-container-answer">Robotois es una plataforma para aprender electrónica y crear tus propios robots.</span>
        </section>

        <section className="App-kit-section">
          <h3>¿Que incluye el kit?</h3>
          <div className="App-kit-section-image-text">
            <section className="App-kit-section-left">
              <img src={pi3} alt="logo" />
            </section>
            <section className="App-kit-section-right">
              <h4>El cerebro del kit</h4>
              <p>Raspberry Pi 3 configurada con nuestra plataforma, lista para empezar a crear tus propios robots.</p>
            </section>
          </div>
          <div className="App-kit-section-image-text">
            <section className="App-kit-section-left">
              <h4>Tarjeta Robotois</h4>
              <p>La tarjeta robotois te permite utilizar todos nuestros componente de una manera sencilla y facil, cuenta con 6 entradas normales y 2 entradas para conectar hasta 6 motores.</p>
            </section>
            <section className="App-kit-section-right">
              <img src={shield} alt="logo" />
            </section>
          </div>
          <div className="App-kit-section-image-text">
            <section className="App-kit-section-left">
              <img src={sensores} alt="logo" />
            </section>
            <section className="App-kit-section-right">
              <h4>Sensores</h4>
              <p>Un grupo de sensores que te ayudaran a crear asombrosos robots. Tendras sensores de temperatura, distancia, luz, humedad, movimiento, rotatorio y botones.</p>
            </section>
          </div>
          <div className="App-kit-section-image-text">
            <section className="App-kit-section-left">
              <h4>Actuadores</h4>
              <p>Un grupo de actuadores que pueden ser configurados en conjunto con lo sensores para mostrar información, de una manera facil y sencilla. Tendras LEDs, LEDs RGB y un Display LCD.</p>
            </section>
            <section className="App-kit-section-right">
              <img src={actuadores} alt="logo" />
            </section>
          </div>
          <div className="App-kit-section-image-text">
            <section className="App-kit-section-left">
              <img src={motores} alt="logo" />
            </section>
            <section className="App-kit-section-right">
              <h4>Motores</h4>
              <p>Un grupo de dos motores y dos servomotores, que te ayudaran a crear robots que tengan movimiento, como un robot seguidor de line, un luchador de sumo y hasta un brazo robotico.</p>
            </section>
          </div>
          <div className="App-kit-section-buy">
            <div className="App-bottom-action-button-purple"> Mayo 2017</div>
          </div>
        </section>
        <div className="App-editor-title"> Plataforma </div>
        <section className="App-editor-section">
          <div className="App-editor-section-left">
            <img src={visualEditor} alt="editor" />
            <h4>Plataforma Programable</h4>
            <p>Un grupo de dos motores y dos servomotores, que te ayudaran a crear robots que tengan movimiento, como un robot seguidor de line, un luchador de sumo y hasta un brazo robotico.</p>
          </div>
          <div className="App-editor-section-right">
              <div className="App-editor-tests-section">
                <img src={config} alt="editor" />
                <section>
                  <h4>Prueba tus Robots</h4>
                  <p>Descarga tu programa a tu kit y ve como funciona en la vida real, de esta manera no solo simulas tambien estas programando tu kit.</p>
                </section>
              </div>
              <div className="App-editor-code-section">
                <img src={coding} alt="editor" />
                <section>
                  <h4>Plataforma Avanzada</h4>
                  <p>Con la plataforma avanzada tendrás la posibilidad de utilizar el máximo potencial de cada componente. Podrás crear robots aun mas asombrosos.</p>
                </section>
              </div>
          </div>
        </section>
        <div className="App-editor-title">  </div>
        <div className="App-bottom-action">
          <span className="App-bottom-action-slogan"> Compra el kit y empieza a crear tus robots </span>
          <div className="App-bottom-action-button"> Mayo 2017</div>
        </div>
      </div>
    );
  }
}

export default App;

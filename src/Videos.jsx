import React from 'react';
import YouTube from 'react-youtube';

import './Videos.css';

const Videos = () => (
  <div className="Video-container">
    <h1>¿Que es Robotois?</h1>
    <YouTube videoId='cwOXSXkW-uE'/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
)
export default Videos;

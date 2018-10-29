import React from 'react';
import ReactDOM from 'react-dom';

import Thermometer from './Thermometer';

const root = document.getElementById('root');

let temp = 20;
function renderThermometer() {
  ReactDOM.render(<Thermometer temp={temp} />, root);

  temp = temp + (Math.random() * (Math.random() < 0.5 ? 1 : -1))
}

setInterval(renderThermometer, 1000);
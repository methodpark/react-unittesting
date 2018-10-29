import React from 'react';
import ReactDOM from 'react-dom';

import Thermometer from './Thermometer';

const root = document.getElementById('root');

// fake temperature value, gets recaclulated every second
let temp = 20;
function renderThermometer() {
  // rerender the thermometer with an updated temperature value
  ReactDOM.render(<Thermometer temp={temp} />, root);

  temp = temp + (Math.random() * (Math.random() < 0.5 ? 1 : -1))
}

setInterval(renderThermometer, 1000);
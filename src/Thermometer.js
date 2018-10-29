import React, { Component } from 'react';

import Temperatur from './Temperatur';

export default class Thermometer extends Component {
  constructor() {
    super();
    this.state = {
      min: Infinity, 
      max: -Infinity
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      min: Math.min(props.temp, state.min),
      max: Math.max(props.temp, state.max)
    };
  }

  render() {
    return (
      <div id="thermometer">
        <h1>Thermometer</h1>

        <Temperatur 
          label="Min" value={this.state.min} />
        <Temperatur
          label="Current" value={this.props.temp} />
        <Temperatur
          label="Max" value={this.state.max} />
      </div>
    );
  }
}
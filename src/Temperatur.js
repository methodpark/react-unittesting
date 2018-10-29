import React from 'react';

export default class Temperatur extends React.Component {
  render() {
    const {label, value} = this.props;

    return (
      <div id={label.toLowerCase()} className="temp">
        {label}: {this._round(value)}°C
      </div>
    );
  }

  _round(value) {
    return Math.round(value * 100) / 100;
  }
}
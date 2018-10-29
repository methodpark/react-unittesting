import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Thermometer from '../Thermometer';
import Temperatur from '../Temperatur';

describe('render default thermo (mount)', () => {
  it('should render the min temperature', () => {
    const temperature = 20;

    const wrapper = mount(<Thermometer 
      temp={temperature} />);

    const minText = wrapper.find('#min').text();
    const expected = 'Min: 20°C';
    expect(minText).toEqual(expected);
  });

  it('should render the current temperature', () => {
    const temperature = 20;

    const wrapper = mount(<Thermometer 
      temp={temperature} />);

    const currentText = wrapper.find('#current').text();
    const expected = 'Current: 20°C';
    expect(currentText).toEqual(expected);
  });

  it('should render the max temperature', () => {
    const temperature = 20;

    const wrapper = mount(<Thermometer 
      temp={temperature} />);

    const maxText = wrapper.find('#max').text();
    const expected = 'Max: 20°C';
    expect(maxText).toEqual(expected);
  });
});

describe('render default thermo (shallow)', () => {
  it('should render the min temp', () => {
    const temperature = 20;
  
    const wrapper = shallow(<Thermometer
      temp={temperature} />);
  
    const min = wrapper.find(Temperatur).at(0);
    const expected = {label: 'Min', value: 20};
    expect(min.props()).toEqual(expected);
  });

  it('should render the current temp', () => {
    const temperature = 20;
  
    const wrapper = shallow(<Thermometer
      temp={temperature} />);
  
    const current = wrapper.find(Temperatur).at(1);
    const expected = {label: 'Current', value: 20};
    expect(current.props()).toEqual(expected);
  });

  it('should render the min temp', () => {
    const temperature = 20;
  
    const wrapper = shallow(<Thermometer
      temp={temperature} />);
  
    const max = wrapper.find(Temperatur).at(2);
    const expected = {label: 'Max', value: 20};
    expect(max.props()).toEqual(expected);
  });
});

describe('render thermo with updates (shallow)', () => {
  let wrapper = null;
  beforeAll(() => {
    wrapper = shallow(<Thermometer temp={20} />);
    wrapper.setProps({temp: 19.1211});
    wrapper.setProps({temp: 21.2221});
    wrapper.setProps({temp: 20.7123});
  });

  it('should render the min temperature', () => {
    const minTemp = wrapper.find(Temperatur).at(0);

    const expected = {label: 'Min', value: 19.1211};
    expect(minTemp.props()).toEqual(expected);
  });

  it('should render the current temperature', () => {
    const currentTemp = wrapper.find(Temperatur).at(1);

    const expected = {label: 'Current', value: 20.7123};
    expect(currentTemp.props()).toEqual(expected);
  });

  it('should render the max temperature', () => {
    const maxTemp = wrapper.find(Temperatur).at(2);

    const expected = {label: 'Max', value: 21.2221};
    expect(maxTemp.props()).toEqual(expected);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
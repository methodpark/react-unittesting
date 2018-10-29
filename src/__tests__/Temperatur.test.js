import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Temperatur from '../Temperatur';

// ------------------- rendering without jest --------
const component = <Temperatur 
  label='label'
  value={42} />;

// shallow rendering
const shallowWrapper = shallow(component);

// full dom rendering
const fullDOMWrapper = mount(component);

// static rendered
const staticRendered = render(component);



const resultByTag = shallowWrapper.find('div');
console.log(resultByTag.text()); // "label: 42°C"

const resultById = shallowWrapper.find('#label');
console.log(resultById.text()); // "label: 42°C"

const resultByClass = shallowWrapper.find('.temp');
console.log(resultByClass.text());

const resultByMisc = shallowWrapper.find('div.temp');
console.log(resultByMisc.text());



describe('render', () => {
  it('should render the correct id', () => {
    const label = "Temperatur";
    const temperature = 42.229;

    const wrapper = shallow(<Temperatur 
      label={label} value={temperature} />);

    const id = wrapper.find('div').prop('id');
    const expected = 'temperatur';
    expect(id).toEqual(expected);
  });

  it('should render the temperature and label', () => {
    const label = "Temperatur";
    const temperature = 42.229;

    const wrapper = shallow(<Temperatur 
      label={label} value={temperature} />);
      
    const text = wrapper.find('div').text();
    const expected = 'Temperatur: 42.23°C';
    expect(text).toEqual(expected);
  });
});

describe('snapshot', () => {
  it('should match the snapshot', () => {
    const label = "Temperatur";
    const temperature = 42;

    const rendered = shallow(<Temperatur 
      label={label} value={temperature} />);

    expect(rendered).toMatchSnapshot();
  });
});
import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../src/components/counter/counter.js';

describe('<Counter />', () => {

  it('should be truthy', () => {
    expect(true).toBeTruthy();
  })

  it('counts up', () => {
    let app = shallow(<Counter />);
    expect(app.find('section').exists()).toBeTruthy();
  })

})
import React from 'react';
// import renderer from 'react-test-renderer';
import Header from '../../../../../src/components/header/header.js';

describe('<Header />', () => {

  it('should be truthy', () => {
    expect(true).toBeTruthy();
  });

  it('counts up', () => {
    let app = shallow(<Header />);
    expect(app.find('header').exists()).toBeTruthy();
  });

});
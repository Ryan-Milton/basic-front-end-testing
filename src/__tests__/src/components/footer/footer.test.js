import React from 'react';
// import renderer from 'react-test-renderer';
import Footer from '../../../../../src/components/footer/footer.js';

describe('<Footer />', () => {

  it('should be truthy', () => {
    expect(true).toBeTruthy();
  });

  it('counts up', () => {
    let app = shallow(<Footer />);
    expect(app.find('footer').exists()).toBeTruthy();
  });

});
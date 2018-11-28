import React from 'react';
// import renderer from 'react-test-renderer';
import Counter from '../../../../../src/components/counter/counter.js';

describe('<Counter />', () => {

  describe('It\'s time to count up!', () => {

    it('counts up', () => {
      let app = mount(<Counter />);
      let countUp = app.find('.up-clicker');
      countUp.simulate('click');
      let result = app.find('span');
      expect(result.text()).toBe('1');
    });

    it('counts up to 5', () => {
      let app = mount(<Counter />);
      let countUp = app.find('.up-clicker');
      countUp.simulate('click');
      countUp.simulate('click');
      countUp.simulate('click');
      countUp.simulate('click');
      countUp.simulate('click');
      let result = app.find('span');
      expect(result.text()).toBe('5');
    });

  
  });

  describe(`It's time to count down!`, () => {

    it('counts down', () => {
      let app = mount(<Counter />);
      let countDown = app.find('.down-clicker');
      countDown.simulate('click');
      let result = app.find('span');
      expect(result.text()).toBe('-1');
    });

    it('counts down to -5', () => {
      let app = mount(<Counter />);
      let countDown = app.find('.down-clicker');
      countDown.simulate('click');
      countDown.simulate('click');
      countDown.simulate('click');
      countDown.simulate('click');
      countDown.simulate('click');
      let result = app.find('span');
      expect(result.text()).toBe('-5');
    });

  });

  describe(`It's time to count up AND down!`, () => {

    it('counts down to -2 then up to 1', () => {
      let app = mount(<Counter />);
      let countUp = app.find('.up-clicker');
      let countDown = app.find('.down-clicker');
      countDown.simulate('click');
      countDown.simulate('click');
      let result = app.find('span');
      expect(result.text()).toBe('-2');
      countUp.simulate('click');
      countUp.simulate('click');
      countUp.simulate('click');
      expect(result.text()).toBe('1');
    });

    it('counts down to -7 then up to 0', () => {
      let app = mount(<Counter />);
      let countUp = app.find('.up-clicker');
      let countDown = app.find('.down-clicker');
      countDown.simulate('click');
      countDown.simulate('click');
      countDown.simulate('click');
      countDown.simulate('click');
      countDown.simulate('click');
      countDown.simulate('click');
      countDown.simulate('click');
      let result = app.find('span');
      expect(result.text()).toBe('-7');
      countUp.simulate('click');
      countUp.simulate('click');
      countUp.simulate('click');
      countUp.simulate('click');
      countUp.simulate('click');
      countUp.simulate('click');
      countUp.simulate('click');
      expect(result.text()).toBe('0');
    });

  });

  describe(`We're checking the state of the app`, () => {

    it('should have a state.count of -1 and a state.polarity of negative', () => {
      let app = mount(<Counter />);
      let countDown = app.find('.down-clicker');
      countDown.simulate('click');
      let state = app.state();
      expect(state.count).toEqual(-1);
      expect(state.polarity).toBe('negative');
    });

    it('should have a state.count of 1 and a state.polarity of positive', () => {
      let app = mount(<Counter />);
      let countUp = app.find('.up-clicker');
      countUp.simulate('click');
      let state = app.state();
      expect(state.count).toEqual(1);
      expect(state.polarity).toBe('positive');
    });

  });

  

});
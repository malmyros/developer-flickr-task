import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './navbar';

describe('navbar', () => {
  it('should render without crashing', () => {
    const component = shallow(<Navbar/>);
    expect(component).toMatchSnapshot();
  });
});

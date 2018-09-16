import React from 'react';
import { shallow } from 'enzyme';
import Tag from './tag';

describe('tag', () => {
  it('should render without crashing', () => {
    const component = shallow(<Tag title={'title'}/>);
    expect(component).toMatchSnapshot();
  });
});

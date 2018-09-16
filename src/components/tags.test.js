import React from 'react';
import { shallow } from 'enzyme';
import Tags from './tags';

describe('tag', () => {
  it('should render without crashing', () => {
    const tags = [
      { id: 1, title: 'tag 1' },
      { id: 2, title: 'tag 2' },
      { id: 3, title: 'tag 3' },
    ];

    const component = shallow(<Tags tags={tags}/>);
    expect(component.find('Tag')).toBeTruthy();
    expect(component.find('Tag')).toHaveLength(3);
    expect(component).toMatchSnapshot();
  });
});

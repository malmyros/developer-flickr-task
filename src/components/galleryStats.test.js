import React from 'react';
import { shallow } from 'enzyme';
import GalleryStats from './galleryStats';

describe('gallery stats', () => {
  it('should render without crashing', () => {
    const component = shallow(<GalleryStats countTotal={10}
                                            countViews={2}
                                            countComments={3}/>);
    expect(component).toMatchSnapshot();
  });
});

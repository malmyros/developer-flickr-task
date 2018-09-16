import React from 'react';
import { shallow } from 'enzyme';
import PhotoStream from './photoStream';

describe('photostream', () => {
  it('should render without crashing', () => {
    const mockedCallback = jest.fn();

    const component = shallow(
      <PhotoStream title={'title'}
                   description={'description'}
                   countComments={10}
                   countTotal={3}
                   countViews={4}
                   onLoadPhotosRequest={mockedCallback}
                   onLoadPhotosSuccess={mockedCallback}
                   onLoadPhotosFailure={mockedCallback}
                   onUpdateGallery={mockedCallback}/>,
    );
    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Photos from './photos';
import { THUMBNAIL } from '../model/viewType';
import PhotosBuilder from '../builders/photosBuilder';
import PhotoBuilder from '../builders/photoBuilder';

describe('photos', () => {
  it('should render without crashing', () => {
    const photos = new PhotosBuilder.Builder()
      .withPhotos([
        new PhotoBuilder.Builder('1')
          .withFarm(0)
          .withTitle('photo 1')
          .withServer(1)
          .withSecret('secret 1')
          .build(),
        new PhotoBuilder.Builder('2')
          .withFarm(0)
          .withTitle('photo 2')
          .withServer(1)
          .withSecret('secret 2')
          .build(),
      ])
      .build();

    const component = shallow(<Photos viewType={THUMBNAIL} photos={photos.photos}/>);
    expect(component.find('Photo')).toHaveLength(2);
    expect(component).toMatchSnapshot();
  });
});

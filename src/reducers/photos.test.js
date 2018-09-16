import { LOADING_PHOTOS_FAILURE, LOADING_PHOTOS_REQUEST, LOADING_PHOTOS_SUCCESS } from '../types';
import photos from './photos';
import PhotosBuilder from '../builders/photosBuilder';
import PhotoBuilder from '../builders/photoBuilder';

describe('photos reducer', () => {
  it(`should return the correct state for ${LOADING_PHOTOS_REQUEST}`, () => {
    expect(photos([], {
      type: LOADING_PHOTOS_REQUEST,
    })).toEqual([]);
  });

  it(`should return the correct state for ${LOADING_PHOTOS_SUCCESS}`, () => {
    expect(photos([], {
      type: LOADING_PHOTOS_SUCCESS,
      photos: new PhotosBuilder.Builder()
        .withPhotos([
          new PhotoBuilder.Builder(1)
            .withFarm(0)
            .withTitle('photo 1')
            .withServer(1)
            .withSecret('secret 1')
            .build(),
          new PhotoBuilder.Builder(2)
            .withFarm(0)
            .withTitle('photo 2')
            .withServer(1)
            .withSecret('secret 2')
            .build(),
        ]),
    })).toEqual({
      photos: [
        {
          id: 1, farm: 0, title: 'photo 1', server: 1, secret: 'secret 1',
        },
        {
          id: 2, farm: 0, title: 'photo 2', server: 1, secret: 'secret 2',
        },
      ],
    });
  });

  it(`should return the correct state for ${LOADING_PHOTOS_FAILURE}`, () => {
    expect(photos([], {
      type: LOADING_PHOTOS_FAILURE,
    })).toEqual([]);
  });
});

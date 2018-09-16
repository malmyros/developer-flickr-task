import PhotosBuilder from './photosBuilder';

describe('photos builder', () => {
  it('should create photos with all the properties', () => {
    const expectedPhotos = new PhotosBuilder.Builder()
      .withPhotos([])
      .build();

    expect(expectedPhotos).toEqual({
      photos: [],
    });
  });
});

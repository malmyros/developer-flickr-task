import PhotoBuilder from './photoBuilder';

describe('photo builder', () => {
  it('should return a photo with all the properties', () => {
    const expectedPhoto = new PhotoBuilder.Builder(1)
      .withFarm(0)
      .withTitle('title')
      .withServer(3)
      .withSecret('secret')
      .build();

    expect(expectedPhoto).toEqual({
      id: 1,
      farm: 0,
      title: 'title',
      server: 3,
      secret: 'secret',
    });
  });
});

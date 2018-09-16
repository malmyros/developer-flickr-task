import GalleryBuilder from './galleryBuilder';

describe('gallery builder', () => {
  it('should be a gallery with all the properties', () => {
    const expectedGallery = new GalleryBuilder.Builder(1)
      .withTitle('title')
      .withDescription('description')
      .withCountTotal(10)
      .withCountViews(32)
      .withCountComments(5)
      .build();

    expect(expectedGallery).toEqual({
      id: 1,
      title: 'title',
      description: 'description',
      count_total: 10,
      count_views: 32,
      count_comments: 5,
    });
  });
});

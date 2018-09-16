import { UPDATE_GALLERY } from '../types';
import gallery from './gallery';
import GalleryBuilder from '../builders/galleryBuilder';

describe('gallery reducer', () => {
  it(`should return the correct state for ${UPDATE_GALLERY}`, () => {
    expect(gallery({}, {
      type: UPDATE_GALLERY,
      gallery: new GalleryBuilder.Builder(1)
        .withTitle('title')
        .withDescription('description')
        .withCountTotal(10)
        .withCountViews(2)
        .withCountComments(20)
        .build(),
    })).toEqual({
      id: 1,
      title: 'title',
      description: 'description',
      count_total: 10,
      count_views: 2,
      count_comments: 20,
    });
  });
});

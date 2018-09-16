import { CHANGE_VIEW_TYPE } from '../types';
import viewType from './viewType';
import { LARGE, THUMBNAIL } from '../model/viewType';

describe('view type reducer', () => {
  it(`should return the correct state for ${CHANGE_VIEW_TYPE}`, () => {
    expect(viewType(THUMBNAIL, {
      type: CHANGE_VIEW_TYPE,
      viewType: LARGE,
    })).toEqual(LARGE);
  });
});

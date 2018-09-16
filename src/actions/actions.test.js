import {
  CHANGE_VIEW_TYPE, LOADING_PHOTOS_FAILURE,
  LOADING_PHOTOS_REQUEST, LOADING_PHOTOS_SUCCESS, UPDATE_GALLERY,
} from '../types';
import {
  changeViewType, loadingPhotosFailure,
  loadingPhotosRequest, loadingPhotosSuccess, updateGallery,
} from './index';
import { JUSTIFIED } from '../model/viewType';

describe('actions', () => {
  it('should create an action to request photos', () => {
    const expectedAction = {
      type: LOADING_PHOTOS_REQUEST,
    };

    expect(loadingPhotosRequest()).toEqual(expectedAction);
  });

  it('should create an action for requesting photos successfully', () => {
    const expectedAction = {
      type: LOADING_PHOTOS_SUCCESS,
      photos: [
        { id: 1, title: 'Drive' },
        { id: 2, title: 'Freedom road' },
      ],
    };

    expect(loadingPhotosSuccess([
      { id: 1, title: 'Drive' },
      { id: 2, title: 'Freedom road' },
    ])).toEqual(expectedAction);
  });

  it('should create an action for failing to request photos', () => {
    const expectedAction = {
      type: LOADING_PHOTOS_FAILURE,
      error: {
        code: 500,
        description: 'An unexpected error has occurred',
      },
    };

    expect(loadingPhotosFailure({
      code: 500,
      description: 'An unexpected error has occurred',
    })).toEqual(expectedAction);
  });

  it('should create an action updating teh gallery', () => {
    const gallery = {
      gallery: {
        id: 1,
        title: {
          _content: 'title',
        },
        description: {
          _content: 'description',
        },
        count_total: 0,
        count_views: 0,
        count_comments: 0,
      },
    };
    const expectedActon = {
      type: UPDATE_GALLERY,
      gallery,
    };

    expect(updateGallery(gallery)).toEqual(expectedActon);
  });

  it('should create an action for changing the view type', () => {
    const expectedAction = {
      type: CHANGE_VIEW_TYPE,
      viewType: JUSTIFIED,
    };

    expect(changeViewType(JUSTIFIED)).toEqual(expectedAction);
  });
});

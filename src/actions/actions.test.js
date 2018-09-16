import {
  CHANGE_VIEW_TYPE, LOADING_PHOTOS_FAILURE,
  LOADING_PHOTOS_REQUEST, LOADING_PHOTOS_SUCCESS,
} from '../types';
import {
  changeViewType, loadingPhotosFailure,
  loadingPhotosRequest, loadingPhotosSuccess,
} from './index';
import { JUSTIFIED } from '../model/viewType';

describe('actions', () => {
  it('should create an action to request photos', () => {
    const expectAction = {
      type: LOADING_PHOTOS_REQUEST,
    };

    expect(loadingPhotosRequest()).toEqual(expectAction);
  });

  it('should create an action for requesting photos successfully', () => {
    const expectAction = {
      type: LOADING_PHOTOS_SUCCESS,
      photos: [
        { id: 1, title: 'Drive' },
        { id: 2, title: 'Freedom road' },
      ],
    };

    expect(loadingPhotosSuccess([
      { id: 1, title: 'Drive' },
      { id: 2, title: 'Freedom road' },
    ])).toEqual(expectAction);
  });

  it('should create an action for failing to request photos', () => {
    const expectAction = {
      type: LOADING_PHOTOS_FAILURE,
      error: {
        code: 500,
        description: 'The server was unable to handle the request',
      },
    };

    expect(loadingPhotosFailure({
      code: 500,
      description: 'An unexpected error has occured',
    })).toEqual(expectAction);
  });

  it('should create an action for changing the view type', () => {
    const expectAction = {
      type: CHANGE_VIEW_TYPE,
      viewType: JUSTIFIED,
    };

    expect(changeViewType(JUSTIFIED)).toEqual(expectAction);
  });
});

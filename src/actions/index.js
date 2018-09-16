import {
  CHANGE_VIEW_TYPE, LOADING_PHOTOS_FAILURE, LOADING_PHOTOS_REQUEST,
  LOADING_PHOTOS_SUCCESS, UPDATE_GALLERY,
} from '../types';

export const loadingPhotosRequest = () => ({ type: LOADING_PHOTOS_REQUEST });
export const loadingPhotosSuccess = photos => ({ type: LOADING_PHOTOS_SUCCESS, photos });
export const loadingPhotosFailure = error => ({ type: LOADING_PHOTOS_FAILURE, error });
export const updateGallery = gallery => ({ type: UPDATE_GALLERY, gallery });
export const changeViewType = viewType => ({ type: CHANGE_VIEW_TYPE, viewType });

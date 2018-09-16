import { LOADING_PHOTOS_FAILURE, LOADING_PHOTOS_REQUEST, LOADING_PHOTOS_SUCCESS } from '../types';

const photos = (state = [], action) => {
  switch (action.type) {
    case LOADING_PHOTOS_REQUEST:
      return [];
    case LOADING_PHOTOS_SUCCESS:
      return action.photos;
    case LOADING_PHOTOS_FAILURE:
      return [];
    default:
      return state;
  }
};

export default photos;

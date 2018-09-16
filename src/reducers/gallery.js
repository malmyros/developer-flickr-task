import { UPDATE_GALLERY } from '../types';

const gallery = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_GALLERY:
      return action.gallery;
    default:
      return state;
  }
};

export default gallery;

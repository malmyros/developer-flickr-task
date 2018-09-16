import { THUMBNAIL } from '../model/viewType';
import { CHANGE_VIEW_TYPE } from '../types';

const viewType = (state = THUMBNAIL, action) => {
  switch (action.type) {
    case CHANGE_VIEW_TYPE:
      return action.viewType;
    default:
      return state;
  }
};

export default viewType;

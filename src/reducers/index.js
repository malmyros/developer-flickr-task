import { combineReducers } from 'redux';
import viewType from './viewType';
import gallery from './gallery';
import photos from './photos';

const rootReducer = combineReducers({
  viewType,
  gallery,
  photos,
});

export default rootReducer;

import { combineReducers } from 'redux';
import paintReducer from './paintReducer';

const rootReducer = combineReducers({
  paints: paintReducer
});

export default rootReducer;
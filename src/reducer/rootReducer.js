import { combineReducers } from 'redux';
import paintReducer from './paintReducer';
import featuredReducer from './featuredReducer';

const rootReducer = combineReducers({
  paints: paintReducer,
  features: featuredReducer
});

export default rootReducer;
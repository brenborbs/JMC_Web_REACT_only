import { combineReducers } from 'redux';
import paintReducer from './paintReducer';
import featuredReducer from './featuredReducer';
import newsfeatureReducer from './featuredNews';

const rootReducer = combineReducers({
  paints: paintReducer,
  features: featuredReducer,
  newsInfo: newsfeatureReducer 
});

export default rootReducer;
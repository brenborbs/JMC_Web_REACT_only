import { combineReducers } from 'redux';
import paintReducer from './paintReducer';
import featuredReducer from './featuredReducer';
import newsfeatureReducer from './featuredNews';
import newsUpdateReducer from './newsUpdate';

const rootReducer = combineReducers({
  paints: paintReducer,
  features: featuredReducer,
  newsInfo: newsfeatureReducer,
  newsUpdate: newsUpdateReducer  
});

export default rootReducer;
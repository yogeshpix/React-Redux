import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer';
import userReducer from './user/userReducer';

export const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
  user: userReducer,
});

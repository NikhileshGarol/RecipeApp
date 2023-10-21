// src/store/reducers/index.js

import {combineReducers} from 'redux';
import recipeReducer from './recipeReducer';
import userReducer from './userReducer';

const rootReducer = (state, action) => {
  return AppReducer(state, action);
};

const AppReducer = combineReducers({
  recipe: recipeReducer,
  user: userReducer,
});

export default rootReducer;

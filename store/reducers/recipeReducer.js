// src/store/reducers/recipeReducer.js

import { CLEAR_SAVED_RECIPES, GET_SAVED_RECIPES, SAVE_RECIPE } from "../actions/actionTypes";


const initialState = {
  savedRecipes: []
};

const recipeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        savedRecipes: [...state.savedRecipes, action.payload]
      };
    case GET_SAVED_RECIPES:
      return state;

    default:
      return state;
  }
  
};

export default recipeReducer;

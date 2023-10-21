// src/store/actions/recipeActions.js

import {
  CLEAR_SAVED_RECIPES,
  GET_SAVED_RECIPES,
  SAVE_RECIPE,
} from './actionTypes';

export const saveRecipe = recipe => {
  return {
    type: SAVE_RECIPE,
    payload: recipe,
  };
};

export const getSavedRecipes = () => {
  return {
    type: GET_SAVED_RECIPES,
  };
};

// export const clearSavedRecipes = () => {
//   return {
//     type: CLEAR_SAVED_RECIPES
//   };
// };

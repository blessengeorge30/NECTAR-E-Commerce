// src/redux/actions/favoriteActions.js

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Remove the following import statement
// import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actionTypes';

export const addToFavorites = (item) => ({
  type: ADD_TO_FAVORITES,
  payload: item,
});

export const removeFromFavorites = (itemId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: itemId,
});

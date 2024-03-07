// src/redux/actions/favoriteActions.js

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';


export const addToFavorites = (item) => ({
  type: ADD_TO_FAVORITES,
  payload: item,
});

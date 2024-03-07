// src/redux/reducers/favoriteReducer.js

import { ADD_TO_FAVORITES } from '../action/favoriteaction';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default favoriteReducer;

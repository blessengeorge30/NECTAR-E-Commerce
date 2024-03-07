import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../action/favoriteaction';

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

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default favoriteReducer;
// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import favoriteReducer from './favoritesreducer';

const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

export default rootReducer;

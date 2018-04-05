import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';

const rootReducer = combineReducers({
  cards: cardsReducer
})
// const rootReducer = combineReducers({
//   movies: moviesReducer,
//   favorites: favoritesReducer,
//   user: userReducer,
//   logStatus: logReducer,
//   displayedMovie: displayedMovieReducer
// });

export default rootReducer;

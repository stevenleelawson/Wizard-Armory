import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import formStateReducer from './formStateReducer';
import addToDeckReducer from './addToDeckReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  color: formStateReducer,
  deck: addToDeckReducer
});


export default rootReducer;

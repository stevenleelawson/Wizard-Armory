import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import formStateReducer from './formStateReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  color: formStateReducer
})


export default rootReducer;

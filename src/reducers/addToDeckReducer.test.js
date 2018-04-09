import addToDeckReducer from './addToDeckReducer';
import * as actions from '../actions';
import { mockCleanCard } from '../mockData';

describe('addToDeckReducer', () => {
  it('should return the default state', () => {
    expect(addToDeckReducer(undefined, {})).toEqual([]);
  });

  it('should add a card to the deck array', () => {
    console.log(actions.addToDeck(mockCleanCard))
    expect(undefined, addToDeckReducer(actions.addToDeck(mockCleanCard)))
    .toEqual([mockCleanCard]);
  });
});

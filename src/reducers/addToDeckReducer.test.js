import addToDeckReducer from './addToDeckReducer';
import * as actions from '../actions';
import { mockCleanCard } from '../mockData';

describe('addToDeckReducer', () => {
  it('should return the default state', () => {
    expect(addToDeckReducer(undefined, {})).toEqual([]);
  });

  it('should add a card to the deck array', () => {
    const addToDeckAction = actions.addToDeck(mockCleanCard);
    const actual = addToDeckReducer(undefined, addToDeckAction);
    const expected = [mockCleanCard];

    expect(actual).toEqual(expected);
  });
});

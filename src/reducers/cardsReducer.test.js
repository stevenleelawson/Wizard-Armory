import cardsReducer from './cardsReducer';
import * as actions from '../actions';

describe('cardsReducer', () => {
  it('should return the default state', () => {
    expect(cardsReducer(undefined, {})).toEqual({});
  });

  it('should update state tree with an object of card-colors', () => {
    const mockObject = {name: 'taco', id: 2, imageUrl: 'www.taco.com'};
    const mockColor = 'Green';
    const actionLoadCards = actions.loadCards(mockObject, mockColor);
    const actualReducer = cardsReducer(undefined, actionLoadCards);
    const expected = {
      Green: mockObject
    };
    expect(actualReducer).toEqual(expected);
  });
});

import cardsReducer from './cardsReducer';
import * as actions from '../actions';
import mockCardData from '../mockData';

describe('cardsReducer', () => {
  it('should return the default state', () => {
    expect(cardsReducer(undefined, {})).toEqual({});
  });

  it('should update state tree with an object of card-colors', () => {
    const mockObject = {name: 'taco', id: 2, imageUrl: 'www.taco.com'}
    const mockColor = 'Green'
    const actualReducer = cardsReducer(undefined, actions.loadCards(mockObject, mockColor))
    const expected = {
      Green: mockObject
    }
    expect(actualReducer).toEqual(expected);
  });
});

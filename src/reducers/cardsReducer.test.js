import cardsReducer from './cardsReducer';
import * as actions from '../actions';
import mockCardData from '../mockData';

describe('cardsReducer', () => {
  it('should return the default state', () => {
    expect(cardsReducer(undefined, {})).toEqual([])
  });

  it('should update state tree with an array of cards', () => {
    expect(cardsReducer(undefined, actions.loadCards(mockCardData))).toEqual(mockCardData);
  });
});

// it('should add an array of movies to the state', () => {
//     expect(moviesReducer(undefined, actions.loadCards(mockMovies)))
//       .toEqual(mockMovies);
//   });

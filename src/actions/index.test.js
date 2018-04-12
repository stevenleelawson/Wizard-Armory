import * as actions from './index';
import * as mockData from '../mockData';

describe('Actions', () => {
  it('should return an action type of loadCards', () => {
    const cards = mockData.mockCardData;
    const color = 'Green';
    const expected = {
      type: 'LOAD_CARDS',
      cards,
      color
    };

    expect(actions.loadCards(cards, color)).toEqual(expected);
  });

  it('should return an action type of formState', () => {
    const color= 'green';
    const expected = {
      type: 'FORM_STATE',
      color
    };

    expect(actions.formState(color)).toEqual(expected);
  });

  it('should add a card to the deck', () => {
    const card = mockData.mockCleanCard;
    const expected = {
      type: 'ADD_TO_DECK',
      card
    };
    expect(actions.addToDeck(card)).toEqual(expected);
  });
});

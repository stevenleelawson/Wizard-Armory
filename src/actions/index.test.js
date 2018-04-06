import { shallow } from 'enzyme';
import * as actions from './index';
import * as mockData from '../mockData';

describe('Actions', () => {
  it('should return an action type of loadCards', () => {
    const cards = mockData.mockCardData;
    const expected = {
      type: 'LOAD_CARDS',
      cards
    }
    expect(actions.loadCards(cards)).toEqual(expected)
  });
});

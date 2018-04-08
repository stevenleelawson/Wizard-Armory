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

  it('should return an action type of formState', () => {
    const color= 'green';
    const expected = {
      type: 'FORM_STATE',
      color
    }
    expect(actions.formState(color)).toEqual(expected);
  });
});

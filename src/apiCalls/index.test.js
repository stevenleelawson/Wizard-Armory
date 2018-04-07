import * as api from './index';
import * as mockData from '../mockData';
import { cardsCleaner } from '../helpers';

jest.mock('../helpers');

describe('getCards', () => {
  let color;
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({cards: mockData.mockCardData})
    }));
    color = 'green';
  });

  it('should call fetch with right params', () => {
      const root = 'https://api.magicthegathering.io/v1/cards';
      const expected = `${root}/?colors=${color}`;

      api.getCards(color)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });
  it('should call cleanCards with the right params', () => {
      api.cardsCleaner = jest.fn();
      api.getCards(color);
      expect(cardsCleaner).toHaveBeenCalledWith(mockData.mockCardData)
  });
});

import * as api from './index';
import * as mockData from '../mockData';
import { cardsCleaner } from '../helpers';

describe('getCards', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({cards: mockData.mockCardData})
    }));

    it('should call fetch with right params', () => {
      const root = 'https://api.magicthegathering.io/v1/cards';
      const expected = `${root}/?colors=${color}`;

      api.getCards('green')
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });
  });
});

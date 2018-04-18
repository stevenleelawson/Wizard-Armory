import { cardsCleaner } from './index';
import * as mockData from '../mockData';

describe('cardsCleaner', () => {
  it('should return clean cards', () => {
    const actual = mockData.mockCardData;
    const expected = [mockData.mockCleanCard]

    const wrangledData = cardsCleaner(actual);

    expect(wrangledData).toEqual(expected);
  });
})

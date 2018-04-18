import React from 'react';
import { shallow } from 'enzyme';
import { DeckContainer, mapDispatchToProps, mapStateToProps } from './index';
import * as mockData from '../../mockData';
import * as actions from '../../actions';

describe('DeckContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<DeckContainer deck={mockData.mockCardData}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with the right parmas for addToDeck', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    const expected = actions.addToDeck(mockData.mockCleanCard);
    mapped.addToDeck(mockData.mockCleanCard);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});

describe('mapStateToProps', () => {

  it('should return an array with cards equal to an array', () => {
    const expected = { deck: mockData.mockCleanCard};
    const actual = mapStateToProps(expected);
    expect(actual).toEqual(expected);
  });

  it('should return an object with cards equal to an array', () => {
    const expected = { cards: mockData.mockCleanCard};
    const actual = mapStateToProps(expected);
    expect(actual).toEqual(expected);
  });
});

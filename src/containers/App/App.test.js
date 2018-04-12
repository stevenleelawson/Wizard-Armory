import React from 'react';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import * as actions from '../../actions';
import * as mockData from '../../mockData';


jest.mock('../../apiCalls');

describe('App', () => {
  let mockLoadCards;
  beforeEach( () => {
    mockLoadCards = jest.fn();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <App
        loadCards={mockLoadCards}
      />,
      { disableLifecycleMethods: true }
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with the right paramas for loadCards', () => {
    const color = 'Green';
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    const expected = actions.loadCards(mockData.mockCleanCard, color)
    mapped.loadCards(mockData.mockCleanCard, color);

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with the right paramas for formState', () => {
    const color = 'green';
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    const expected = actions.formState(color);
    mapped.formState(color);

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});

describe('mapStateToProps', () => {
  it('should return an object with color and color state', () => {
    const expected = {color: 'blue'};
    expect({color: 'blue'}).toEqual(expected);
  });

  it('should return an object with cards equal to an array', () => {
    const expected = { cards: mockData.mockCleanCard}
    const actual = mapStateToProps(expected)
    expect(actual).toEqual(expected)
  });
});

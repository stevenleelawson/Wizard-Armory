import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapDispatchToProps } from './index';
import * as actions from '../../actions';
import * as mockData from '../../mockData';

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer cards={mockData.mockCardData}/>);
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

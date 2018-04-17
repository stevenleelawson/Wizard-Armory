import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';
import * as mockData from '../../mockData'

describe('Card', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card deck={mockData.mockCardData}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

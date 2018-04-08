import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './index';
import * as mockData from '../../mockData';

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer cards={mockData.mockCardData}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

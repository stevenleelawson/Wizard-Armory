import Navigation from './index';
import React from 'react';
import { shallow } from 'enzyme';

describe('Navigation', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
  });
})

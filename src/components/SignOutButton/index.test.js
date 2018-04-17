import React from 'react';
import { shallow } from 'enzyme';
import SignOutButton from './index';

describe('SignOutButton', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SignOutButton />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './index';

describe('SignUpForm', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SignUpForm />);
    expect(wrapper).toMatchSnapshot();
  });
});

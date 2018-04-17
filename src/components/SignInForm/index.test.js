import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from './index';

describe('SignInForm', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SignInForm />);
    expect(wrapper).toMatchSnapshot();
  });
});

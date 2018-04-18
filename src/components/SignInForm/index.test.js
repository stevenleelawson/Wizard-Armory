import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from './index';

describe('SignInForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignInForm />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state on handleChange', () => {
    //setup
    const mockEvent = {
      target: {
        value: 'taco@taco.com',
        name: 'email'
      }
    }
    const mockUser = {
      email: 'taco@taco.com',
      password: '',
      errorMsg: false
    }
    //execution
    wrapper.instance().handleChange(mockEvent)

    //assertion
    expect(wrapper.state()).toEqual(mockUser)
  });
});

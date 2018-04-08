import React from 'react';
import { shallow } from 'enzyme';
import { Form } from './index';

describe('Form', () => {
  let wrapper;
  const mockFormState = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form formState={mockFormState}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should begin with an empty state', () => {
    const expected = {
      color: ''
    };
    expect(wrapper.state()).toEqual(expected);
  });

  it('should update the state with selected color', () => {
    const mockEvent = {
      target: {
        value: 'Green'
      }
    };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('color')).toEqual('Green');
  });

  it.skip('should call formState on submit', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };

    const expected = {
      color: 'green'
    };

    wrapper.instance().handleSubmit(mockEvent);

  });
});

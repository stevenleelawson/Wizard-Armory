import React from 'react';
import { shallow } from 'enzyme';
import { Form } from './index';


describe('Form', () => {
  let wrapper;
  let mockFormState;

  beforeEach(() => {
    mockFormState = jest.fn();
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

  it('should call formState on submit', () => {
    //setup
    const mockEvent = {
      preventDefault: jest.fn()
    };

    const expected = 'green';

    wrapper.instance().handleChange({target: {value: 'green'}})
    //execution

    //assertion
    expect(mockFormState).toHaveBeenCalledWith(expected);

  });
});

import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import * as actions from '../../actions';


jest.mock('../../apiCalls');

describe('App', () => {
  let mockLoadCards;
  beforeEach( () => {
    mockLoadCards = jest.fn();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <App
        loadCards={mockLoadCards}
      />,
      { disableLifecycleMethods: true }
    )
    expect(wrapper).toMatchSnapshot();
  });
});

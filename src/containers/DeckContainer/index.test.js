import React from 'react';
import { shallow } from 'enzyme';
import DeckContainer from './index';

describe('DeckContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<DeckContainer />)
  });
});

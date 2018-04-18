import formStateReducer from './formStateReducer';
import * as actions from '../actions';

describe('formStateReducer', () => {
  it('should return the default state', () => {
    expect(formStateReducer(undefined, {})).toEqual('');
  });

  it('should update the state tree with a string', () => {
    const mockColor = 'green';
    const actionFormState = actions.formState(mockColor);
    expect(formStateReducer(undefined, actionFormState)).toEqual(mockColor);
  });
});

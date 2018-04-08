const formStateReducer = (state='', action) => {
  switch (action.type) {
  case 'FORM_STATE':
    return action.color;
  default:
    return state;
  }
};

export default formStateReducer;

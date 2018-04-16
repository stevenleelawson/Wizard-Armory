const addToDeckReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_DECK':
      return [...state, action.card];
    case 'CLEAR_DECK':
      return state;
    default:
      return state;
  }
};

export default addToDeckReducer;

const cardsReducer = (state = {}, action) => {
  switch (action.type) {
  case 'LOAD_CARDS':
    return {...state, [action.color]: action.cards}
  default:
    return state;
  }
};

export default cardsReducer;

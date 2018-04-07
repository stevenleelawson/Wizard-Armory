const cardsReducer = (state = [], action) => {
  console.log(action.cards)
  switch (action.type) {
    case 'LOAD_CARDS':
      return action.cards
    default:
      return state;
  }
}

export default cardsReducer;

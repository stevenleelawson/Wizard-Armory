export const loadCards = (cards, color) => ({
  type: 'LOAD_CARDS',
  cards,
  color
});

export const formState = (color) => ({
  type: 'FORM_STATE',
  color
});

export const addToDeck = (card) => ({
  type: 'ADD_TO_DECK',
  card
});

export const clearDeck = () => ({
  type: 'CLEAR_DECK'
})

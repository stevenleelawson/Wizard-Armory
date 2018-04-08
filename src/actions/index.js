export const loadCards = (cards) => ({
  type: 'LOAD_CARDS',
  cards
});

export const formState = (color) => ({
  type: 'FORM_STATE',
  color
});

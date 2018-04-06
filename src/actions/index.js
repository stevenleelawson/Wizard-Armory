export const loadCards = (cards) => ({
  type: 'LOAD_CARDS',
  cards
});

// export const loadCards = (cards) => {
//   console.log('in load cards', cards)
//   return {
//     type: 'LOAD_CARDS',
//     ...cards
//   }
// }

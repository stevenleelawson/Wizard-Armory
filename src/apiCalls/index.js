import * as helpers from '../helpers'
console.log('help', helpers)
export const getCards = async (color) => {
  try {
    const root = 'https://api.magicthegathering.io/v1/cards';
    const response = await fetch(`${root}/?colors=${color}`);
    const cards = await response.json();
    console.log('cards in api', cards)
    return helpers.cardsCleaner(cards.cards)
  } catch (error){
    throw new Error('unable to get cards')
  }
}

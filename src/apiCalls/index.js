import * as helpers from '../helpers';

export const getCards = async (color) => {
  try {
    const root = 'https://api.magicthegathering.io/v1/cards';
    const response = await fetch(`${root}/?colors=${color}`);
    const cards = await response.json();
    return helpers.cardsCleaner(cards.cards);
  } catch (error){
    throw new Error('unable to get cards');
  }
};

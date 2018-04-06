export const cardsCleaner = (cardsArray) => {
  return cardsArray.map( card => ({
    name: card.name,
    imageUrl: card.imageUrl,
    id: card.id
  }))
}

export const getCards = async (color) => {
  try {
    const root = 'https://api.magicthegathering.io/v1/cards';
    const response = await fetch(`${root}/?colors=${color}`);
    const cards = await response.json();
    console.log(cards)
  } catch (error){
    throw new Error('unable to get cards')
  }
}

// export const getMovies = async () => {
//   try {
//     const root = 'https://api.themoviedb.org/3/';
//     const response = await fetch(
//       `${root}movie/upcoming?api_key=${apiKey}&language=en-US`
//     );
//     if (response.status >= 400) {
//       throw new Error('Unable to get movie data');
//     }
//     const movies = await response.json();
//     return helper.moviesWrangler(movies.results);
//   } catch (error) {
//     throw new Error('Unable to get movie data');
//   }
// };

const pokemonUri = 'https://pokeapi.co/api/v2/pokemon';

export const environment = {
  production: false,

  //pokemon api web
  getAllPokemons: `${pokemonUri}?offset=0&limit=1279`,
  getPokemonByInfo: `${pokemonUri}`,

};

import data from "./pokemons";
import pokemon from "./data";
import filteredPokemons from "./type-normal";

export const fetchPokemons = async (lastId, filtered) => {
  if (filtered) return new Promise(resolve => {
    setTimeout(() => resolve(filteredPokemons), 1000);
  });
  
  const offset = lastId + 20;
  const count = 964;
  const next =
    offset < count
      ? `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
      : null;
  const previous =
    lastId > 0
      ? `https://pokeapi.co/api/v2/pokemon?offset=${lastId - 20}&limit=20`
      : null;
  const results = data.results.slice(lastId, Math.min(offset, count));
  return new Promise(resolve => {
    setTimeout(() => resolve({ count, next, previous, results }), 1000);
  });
};

export const fetchPokemon = id => {
  return new Promise(resolve => {
    setTimeout(() => resolve(pokemon), 1000);
  });
};

import data from './pokemons';

export const fetchPokemons = async (lastId) => {
  const offset = lastId + 20
  const count =  38;
  const next = offset < count ? `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20` : null;
  const previous = lastId > 0 ? `https://pokeapi.co/api/v2/pokemon?offset=${lastId - 20}&limit=20` : null;
  const results = data.results.slice(lastId, Math.min(offset, count))
  return {
    count,
    next,
    previous,
    results
  }
}

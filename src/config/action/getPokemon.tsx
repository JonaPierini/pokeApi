import {
  PokeApi,
  PokeAPIResult,
} from "../../presentacion/infrastructure/pokeApi.interface";

export const getPokemon = async (limit: number, offset: number) => {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  try {
    const response = await fetch(`${baseUrl}/?limit=${limit}&offset=${offset}`);
    const data: PokeAPIResult = await response.json();
    const pokemonData = await Promise.all(
      data.results.map(async (info) => {
        const response = await fetch(info.url);
        const data: PokeApi = await response.json();
        return data;
      })
    );
    return pokemonData;
  } catch (error) {
    throw new Error(error as never);
  }
};

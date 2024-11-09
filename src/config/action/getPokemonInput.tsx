import { PokeApi } from "../../presentation/infrastructure/pokeApi.interface";

export const getPokemonInput = async (name: string) => {
  try {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(`${baseUrl}/${name}`);
    const data: PokeApi = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

import { PokeApi } from "../../presentation/infrastructure/pokeApi.interface";

export const getPokemonDetail = async (name: string) => {
  try {
    if (name !== "") {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data: PokeApi = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error(error as never);
  }
};

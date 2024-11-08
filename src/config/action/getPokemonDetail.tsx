export const getPokemonDetail = async (name: string) => {
  try {
    if (name !== "") {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error(error as never);
  }
};

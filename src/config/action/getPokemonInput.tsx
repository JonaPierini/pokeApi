export const getPokemonInput = async (name: string) => {
  if (name === "") return;
  try {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(`${baseUrl}/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PokeApi } from "../../infrastructure/pokeApi.interface";
import { PokemonCard } from "../../components/ui/PokemonCard/PokemonCard";
import styled from "styled-components";
import { Button } from "../../components/ui/Button/Button";

export const DetailPokemonPage = () => {
  const [pokemonDetail, setPokemonDetail] = useState<PokeApi>();
  const { name } = useParams();
  const navigation = useNavigate();

  const getData = async () => {
    try {
      if (name !== "") {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokemonDetail(data);
      }
    } catch (error) {
      navigation("/");
      throw new Error(error as never);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Button title="<" onClick={() => navigation("/")} />
      <PokemonCard
        name={pokemonDetail?.name}
        img={pokemonDetail?.sprites.front_default}
      ></PokemonCard>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

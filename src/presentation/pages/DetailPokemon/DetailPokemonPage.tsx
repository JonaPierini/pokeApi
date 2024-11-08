import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PokeApi } from "../../infrastructure/pokeApi.interface";
import { PokemonCard } from "../../components/ui/PokemonCard/PokemonCard";
import styled from "styled-components";
import { Button } from "../../components/ui/Button/Button";
import { getPokemonDetail } from "../../../config/action/getPokemonDetail";

export const DetailPokemonPage = () => {
  const [pokemonDetail, setPokemonDetail] = useState<PokeApi>();
  const { name } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    getPokemonDetail(name!).then((elem) => setPokemonDetail(elem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box itemID="Box-Detail">
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

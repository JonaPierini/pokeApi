import { useEffect, useState } from "react";
import { PokeApi } from "../../infrastructure/pokeApi.interface";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPokemon } from "../../../config/action/getPokemon";
import { PokemonCard } from "../../components/ui/PokemonCard/PokemonCard";
import { Button } from "../../components/ui/Button/Button";

export const PokemonPage = () => {
  const [pokemons, setPokemons] = useState<PokeApi[]>([]);
  const [page, setPage] = useState({
    limit: 10,
    offset: 0,
  });

  useEffect(() => {
    getPokemon(page.limit, page.offset)
      .then((poke) => setPokemons(poke))
      .catch((e) => console.log(e));
  }, [page]);

  const onNextPage = () => {
    setPage({
      ...page,
      offset: page.offset + 10,
    });
  };

  const onPrevPage = () => {
    setPage({
      ...page,
      offset: page.offset - 10,
    });
  };

  return (
    <Box>
      <Button
        disabled={page.offset === 0}
        onClick={onPrevPage}
        title={"<"}
      ></Button>
      <PokemonHomeLayout>
        {pokemons.map((pokemon) => (
          <Link to={`/detail/${pokemon.name}`} key={pokemon.name}>
            <PokemonCard
              name={pokemon.name}
              img={pokemon.sprites.front_default}
            />
          </Link>
        ))}
      </PokemonHomeLayout>
      <Button onClick={onNextPage} title={">"}></Button>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const PokemonHomeLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 1240px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 1rem 0 1rem 0;
  }

  @media (max-width: 940px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

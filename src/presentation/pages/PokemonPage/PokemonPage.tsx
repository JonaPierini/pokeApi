import { useEffect, useState } from "react";
import { PokeApi } from "../../infrastructure/pokeApi.interface";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPokemon } from "../../../config/action/getPokemon";
import { PokemonCard } from "../../components/ui/PokemonCard/PokemonCard";
import { Button } from "../../components/ui/Button/Button";
import Swal from "sweetalert2";

export const PokemonPage = () => {
  const [pokemons, setPokemons] = useState<PokeApi[]>([]);
  const [name, setName] = useState<string>("");
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

  const getPokemonInput = async (name: string) => {
    if (name === "") return;
    try {
      const baseUrl = "https://pokeapi.co/api/v2/pokemon";
      const response = await fetch(`${baseUrl}/${name}`);
      const data = await response.json();
      setPokemons([data]);
      setName("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops... ",
        text: "Something went wrong!",
      });
      setName("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <Box style={{ marginBottom: 10, marginTop: 10 }}>
        <input value={name} onChange={handleInputChange}></input>
        <button onClick={() => getPokemonInput(name)}>Buscar</button>
      </Box>
      <Box>
        <Button
          disabled={page.offset === 0}
          onClick={onPrevPage}
          title={"<"}
        ></Button>
        <PokemonHomeLayout itemcount={pokemons.length}>
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
    </>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

interface PokemonHomeLayoutProps {
  itemcount: number;
}

const PokemonHomeLayout = styled.div<PokemonHomeLayoutProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.itemcount > 1 ? "repeat(5, 1fr)" : "repeat(1, 1fr)"};
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 1240px) {
    grid-template-columns: ${({ itemcount }) =>
      itemcount > 1 ? "repeat(3, 1fr)" : "repeat(1, 1fr)"};
    margin: 1rem 0 1rem 0;
  }

  @media (max-width: 940px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

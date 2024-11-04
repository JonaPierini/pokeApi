import styled from "styled-components";

interface PokemonCardProps {
  name: string | undefined;
  img?: string | undefined;
}

export const PokemonCard = ({ name, img }: PokemonCardProps) => {
  return (
    <BoxPokemonCard>
      <div>
        <img src={img} alt={img}></img>
      </div>
      <div>
        <h4>{name}</h4>
      </div>
    </BoxPokemonCard>
  );
};

const BoxPokemonCard = styled.div`
  width: 13rem;
  height: 20rem;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid #f2f2f2;
  border-radius: 10px;
  div:first-child {
    background-color: #f2f2f2;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80%;
    }
  }
`;

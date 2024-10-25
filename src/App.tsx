import { Navigate, Route, Routes } from "react-router-dom";
import { PokemonPage } from "./presentacion/pages/HomePokemon/PokemonPage";
import { DetailPokemonPage } from "./presentacion/pages/DetailPokemon/DetailPokemonPage";
import { NavBar } from "./presentacion/components/ui/NavBar/NavBar";
import { Footer } from "./presentacion/components/ui/Footer/Footer";
import styled from "styled-components";

export const App = () => {
  return (
    <LayoutApp>
      <NavBar />
      <Routes>
        <Route index path="/" element={<PokemonPage />} />
        <Route index path="/detail/:name" element={<DetailPokemonPage />} />
        <Route index path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </LayoutApp>
  );
};

const LayoutApp = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

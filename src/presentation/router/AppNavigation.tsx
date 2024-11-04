import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../components/ui/NavBar/NavBar";
import { PokemonPage } from "../pages/PokemonPage/PokemonPage";
import { DetailPokemonPage } from "../pages/DetailPokemon/DetailPokemonPage";
import { Footer } from "../components/ui/Footer/Footer";

export const AppNavigation = () => {
  return (
    <LayoutApp>
      <NavBar />
      <Routes>
        <Route index path="/home" element={<PokemonPage />} />
        <Route index path="/detail/:name" element={<DetailPokemonPage />} />
        <Route path="/*" element={<Navigate to={"/home"} />} />
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

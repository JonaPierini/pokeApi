import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./presentacion/router/AppRouter";

export const App = () => {
  return (
    <BrowserRouter basename="/pokeApi">
      <AppRouter />
    </BrowserRouter>
  );
};

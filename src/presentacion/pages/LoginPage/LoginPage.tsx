import styled from "styled-components";
import { Button } from "../../components/ui/Button/Button";
import { useAuthStore } from "../../store/useAuthStore";

export const LoginPage = () => {
  const { login } = useAuthStore();

  return (
    <StyledContainer>
      <h1>Poke-Api</h1>
      <Button onClick={login} title={"Ingresar"} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: #7c7878;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

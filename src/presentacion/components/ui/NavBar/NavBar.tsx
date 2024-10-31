import styled from "styled-components";
import { useAuthStore } from "../../../store/useAuthStore";
import { NavFooterStyle } from "../NavFooterStyle/NavFooterStyle";
import { Button } from "../Button/Button";

export const NavBar = () => {
  const { logout } = useAuthStore();
  return (
    <NavFooterStyle>
      <NavbarText>Nav-Bar</NavbarText>
      <Button onClick={logout} title={"Cerrar"} />
    </NavFooterStyle>
  );
};

const NavbarText = styled.span`
  margin-right: 30px;
`;

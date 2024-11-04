import styled from "styled-components";

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ title, disabled, onClick }: ButtonProps) => {
  return (
    <div>
      <ButtonStyled disabled={disabled} onClick={onClick}>
        {title}
      </ButtonStyled>
    </div>
  );
};

const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#7c7878")};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#7c7878" : "#0056b3")};
  }
`;

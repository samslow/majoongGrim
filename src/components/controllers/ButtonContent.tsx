import React from "react";
import styled from "styled-components";
import Theme from "modules/theme";

interface ButtonContentProps {
  icon: JSX.Element;
  label: string;
  onClick: Function;
}

const ButtonContent: React.FC<ButtonContentProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <Button onClick={() => onClick(label)}>
      <IconContainer>{icon}</IconContainer>
    </Button>
  );
};

const Button = styled.button`
  outline: none;
  margin: 0 0.5em 0 0;
  width: 30px;
  height: 30px;
  padding: 1px;
  background-color: ${Theme.dark};
  border: 2px solid ${Theme.border};
`;

const IconContainer = styled.div`
  margin: auto;
`;

export default ButtonContent;

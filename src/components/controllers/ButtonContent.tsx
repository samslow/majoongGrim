import React from "react";
import styled from "styled-components";

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
  background-color: transparent;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  margin: auto;
`;

export default ButtonContent;

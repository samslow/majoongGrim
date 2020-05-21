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
      <Label>{label}</Label>
    </Button>
  );
};

const Button = styled.button`
  flex: 1;
  margin: 0 0.5em;
  width: 1em;
  height: 6em;
  padding: 5px;
  background-color: transparent;
  outline: none;
  display: inline-block;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 70%;
`;

const Label = styled.label`
  align-self: center;
`;

export default ButtonContent;

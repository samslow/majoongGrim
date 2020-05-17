import React from "react";
import styled from "styled-components";

interface ComponentProps {
  name: string;
}

const LayerBox: React.FC<ComponentProps> = ({ name }) => {
  return (
    <Container>
      <LayerContent>
        <LayerName>{name}</LayerName>
      </LayerContent>
      <UpDownContainer>
        <Button>⬆</Button>
        <Button>⬇</Button>
      </UpDownContainer>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: inset 1px 3px 2px #eee, inset -1px -3px 2px #aaa;

  &:nth-child(2n + 1) {
    background-color: #ddd;
  }
`;
const LayerContent = styled.div`
  flex: 9;
`;

const LayerName = styled.p`
  margin: 0;
  padding-left: 1em;
  font-size: 20px;
`;

const UpDownContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  flex: 1;
  background-color: transparent;
  outline: none;
  border-color: #ccc;
`;

export default LayerBox;

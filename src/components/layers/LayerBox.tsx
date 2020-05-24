import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import Theme from "modules/theme";

interface ComponentProps {
  name: string;
  onMove: (type: string) => void;
  onRemove: VoidFunction;
}

const LayerBox: React.FC<ComponentProps> = ({ name, onMove, onRemove }) => {
  return (
    <Container>
      <LayerContent>
        <LayerName>{name}</LayerName>
        <RemoveButton onClick={() => onRemove()}>
          <FaTrashAlt size={15} color={"#aaa"} />
        </RemoveButton>
      </LayerContent>
      <UpDownContainer>
        <Button onClick={() => onMove("up")}>⬆</Button>
        <Button onClick={() => onMove("down")}>⬇</Button>
      </UpDownContainer>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: inset 1px 3px 2px #999, inset -1px -3px 2px #666;

  &:nth-child(2n + 1) {
    background-color: #888;
  }
  &:nth-child(2n) {
    background-color: #777;
  }
`;
const LayerContent = styled.div`
  flex: 9;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 1em;
`;

const LayerName = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${Theme.text};
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: 0;
  visibility: hidden;
  outline: none;

  ${LayerContent}:hover & {
    visibility: visible;
  }
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
  border: transparent;

  &:focus {
    outline: none;
  }
`;

export default LayerBox;

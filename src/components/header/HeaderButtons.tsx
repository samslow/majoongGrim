import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  padding: 0px 30px 0px 30px;

  & > button {
    cursor: pointer;
    width: 70px;
    height: 30px;
    font-size: 12px;
    margin: 0px 5px 0px 5px;
    border-radius: 3px;
  }
`;

const VERTICAL_SHAPE = "VERTICAL_SHAPE";
const HORIZONTAL_SHAPE = "HORIZONTAL_SHAPE";

interface ComponentProps {
  verticalText: string;
  horizontalText: string;
  downloadText: string;
  onClickShape: Function;
}

const HeaderButtons: React.FC<ComponentProps> = ({
  verticalText,
  horizontalText,
  downloadText,
  onClickShape,
}) => {
  return (
    <ButtonContainer>
      <button onClick={() => onClickShape(VERTICAL_SHAPE)}>
        {verticalText}
      </button>
      <button onClick={() => onClickShape(HORIZONTAL_SHAPE)}>
        {horizontalText}
      </button>
      <button>{downloadText}</button>
    </ButtonContainer>
  );
};

export default HeaderButtons;

import React, { useEffect, useCallback, useState } from "react";
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

const HeaderButtons = ({
  verticalText,
  horizontalText,
  downloadText,
}: {
  verticalText: string;
  horizontalText: string;
  downloadText: string;
}) => {
  const [nowShape, setNowShape] = useState(horizontalText);

  useEffect(() => {
    console.log(nowShape);
  }, [nowShape]);

  const changeShape = useCallback((shapeType) => {
    if (shapeType === VERTICAL_SHAPE) {
      return setNowShape(VERTICAL_SHAPE);
    }
    if (shapeType === HORIZONTAL_SHAPE) {
      return setNowShape(HORIZONTAL_SHAPE);
    }
  }, []);
  return (
    <ButtonContainer>
      <button onClick={() => changeShape(VERTICAL_SHAPE)}>
        {verticalText}
      </button>
      <button onClick={() => changeShape(HORIZONTAL_SHAPE)}>
        {horizontalText}
      </button>
      <button>{downloadText}</button>
    </ButtonContainer>
  );
};

export default HeaderButtons;

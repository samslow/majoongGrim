import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  background: #2db400;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  padding: 0px 30px 0px 30px;
`;

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

const APP_TITLE_TEXT = "마중그림";
const VERTICAL_TEXT = "세로형";
const HORIZONTAL_TEXT = "가로형";
const DOWNLOAD_TEXT = "다운로드";

const VERTICAL_SHAPE = "VERTICAL_SHAPE";
const HORIZONTAL_SHAPE = "HORIZONTAL_SHAPE";

const HeaderContainer = () => {
  const [nowShape, setNowShape] = useState(HORIZONTAL_SHAPE);

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
    <Container>
      <Title>{APP_TITLE_TEXT}</Title>
      <ButtonContainer>
        <button onClick={() => changeShape(VERTICAL_SHAPE)}>
          {VERTICAL_TEXT}
        </button>
        <button onClick={() => changeShape(HORIZONTAL_SHAPE)}>
          {HORIZONTAL_TEXT}
        </button>
        <button>{DOWNLOAD_TEXT}</button>
      </ButtonContainer>
    </Container>
  );
};

export default HeaderContainer;

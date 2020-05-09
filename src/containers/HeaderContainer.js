import React, { useState } from "react";
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

const APP_TITLE = "마중그림";
const VERTICAL = "세로형";
const HORIZONTAL = "가로형";
const DOWNLOAD = "다운로드";

const HeaderContainer = () => {
  return (
    <Container>
      <Title>{APP_TITLE}</Title>
      <ButtonContainer>
        <button>{VERTICAL}</button>
        <button>{HORIZONTAL}</button>
        <button>{DOWNLOAD}</button>
      </ButtonContainer>
    </Container>
  );
};

export default HeaderContainer;

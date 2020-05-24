import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import HeaderButtons from "components/header/HeaderButtons";
import { CHANGE_SHAPE } from "store/headerReducer";

const VERTICAL_TEXT = "세로형";
const HORIZONTAL_TEXT = "가로형";
const DOWNLOAD_TEXT = "다운로드";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const handleShapeButton = (name: string) => {
    dispatch({
      type: CHANGE_SHAPE,
      nowShape: name,
    });
  };

  return (
    <Container>
      <LogoContainer>
        <Logo src={"logo.png"} />
      </LogoContainer>
      <HeaderButtons
        verticalText={VERTICAL_TEXT}
        horizontalText={HORIZONTAL_TEXT}
        downloadText={DOWNLOAD_TEXT}
        onClickShape={(name: string) => {
          handleShapeButton(name);
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 70%;
`;
const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export default HeaderContainer;

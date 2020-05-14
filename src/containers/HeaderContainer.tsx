import React from "react";
import styled from "styled-components";
import Title from "components/header/Title";
import HeaderButtons from "components/header/HeaderButtons";
import useStores from "hooks/useStores";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  background: #2db400;
`;

const APP_TITLE_TEXT = "마중그림";
const VERTICAL_TEXT = "세로형";
const HORIZONTAL_TEXT = "가로형";
const DOWNLOAD_TEXT = "다운로드";

const HeaderContainer = () => {
  const { HeaderStore } = useStores();
  const handleShapeButton = (name: string) => {
    HeaderStore.nowShape = name;
  };

  return (
    <Container>
      <Title appTitleText={APP_TITLE_TEXT} />
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

export default HeaderContainer;

import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import HeaderButtons from "components/header/HeaderButtons";
import { HeaderActions } from "store/headerReducer";
import Theme from "modules/theme";
import { version } from "../../package.json";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const handleShapeButton = (name: string) => {
    dispatch({
      type: HeaderActions.CHANGE_SHAPE,
      nowShape: name,
    });
  };

  return (
    <Container>
      <LogoContainer>
        <Logo src={"logo.png"} />
        <VersionTag>v {version}</VersionTag>
      </LogoContainer>
      <HeaderButtons
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
  background-color: ${Theme.dark};
`;

const Logo = styled.img`
  height: 70%;
`;
const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const VersionTag = styled.p`
  color: ${Theme.text};
  margin: 0;
  margin-left: 1em;
  font-size: 10px;
`;

export default HeaderContainer;

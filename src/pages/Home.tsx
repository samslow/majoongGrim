import React from "react";
import styled from "styled-components";
import HeaderContainer from "containers/HeaderContainer";
import EditorContainer from "containers/EditorContainer";
import ControllerContainer from "containers/ControllerContainer";
import ToolboxContainer from "containers/ToolboxContainer";
import LayerContainer from "containers/LayerContainer";

const Home = () => {
  return (
    <Container>
      <HeaderContainer />
      <Content>
        <LeftContent>
          <EditorContainer />
          <ControllerContainer />
        </LeftContent>
        <RightContent>
          <ToolboxContainer />
          <LayerContainer />
        </RightContent>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 60px);
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px; /* 툴박스는 고정 크기 */
`;

export default Home;

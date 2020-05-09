import React from "react";
import Controller from "containers/ControllerContainer";
import Toolbox from "containers/ToolboxContainer";
import Header from "containers/HeaderContainer";
import Editor from "containers/EditorContainer";
import Layer from "containers/LayerWindowContainer";
import styled from "styled-components";

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

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <LeftContent>
          <Editor />
          <Controller />
        </LeftContent>
        <RightContent>
          <Toolbox />
          <Layer />
        </RightContent>
      </Content>
    </Container>
  );
};

export default Home;

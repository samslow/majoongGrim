import React from "react";
import Controller from "../containers/Controller";
import Toolbox from "../containers/Toolbox";
import Header from "../containers/Header";
import Editor from "../containers/Editor";
import Layer from "../containers/Layer";
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
  flex: 1;
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

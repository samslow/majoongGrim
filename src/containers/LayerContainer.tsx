import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: orange;
  flex: 2;
  z-index: 1000;
`;

const LayerContainer = () => {
  return <Container></Container>;
};

export default LayerContainer;

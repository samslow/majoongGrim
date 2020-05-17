import React from "react";
import styled from "styled-components";
import Layer from "components/layers/Layer";

const Container = styled.div`
  flex: 2;
  z-index: 1000;
`;

const LayerContainer = () => {
  return <Container></Container>;
};

export default LayerContainer;

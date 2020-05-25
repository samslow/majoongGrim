import React from "react";
import styled from "styled-components";

import LayerBoxes from "components/layers/LayerBoxes";
import { useSelector } from "react-redux";
import { RootState } from "store";
import Layer from "modules/layers/Layer";
import Theme from "modules/theme";

const LayerContainer = () => {
  const layers: Layer[] = useSelector(
    (state: RootState) => state.layerReducer.layers,
  );
  return (
    <Container>
      <Title>Layers</Title>
      <LayerGroup>
        <LayerBoxes layers={layers} />
      </LayerGroup>
    </Container>
  );
};

const Container = styled.div`
  flex: 2;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1em 1em 1em;
  background-color: ${Theme.dark};
`;

const Title = styled.h3`
  margin: 0;
  padding: 0.5em;
  color: ${Theme.caption};
  text-align: center;
`;

const LayerGroup = styled.div`
  background-color: ${Theme.lightDark};
  border: 1px solid #999;
  width: 100%;
  height: 100%;
`;

export default LayerContainer;

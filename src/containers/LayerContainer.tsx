import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import LayerBoxes from "components/layers/LayerBoxes";
import useStores from "hooks/useStores";
import { useSelector } from "react-redux";
import { RootState } from "store";
import Layer from "modules/layers/Layer";
import ImageLayer from "modules/layers/ImageLayer";

const LayerContainer = observer(() => {
  const layers: ImageLayer[] = useSelector(
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
});

const Container = styled.div`
  flex: 2;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1em 1em 1em;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0.5em;
  color: #888;
  text-align: center;
`;

const LayerGroup = styled.div`
  background-color: #eee;
  border: 1px solid #999;
  width: 100%;
  height: 100%;
`;

export default LayerContainer;

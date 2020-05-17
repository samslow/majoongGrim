import React from "react";
import styled from "styled-components";
import { toJS } from "mobx";
import { observer } from "mobx-react";

import LayerBox from "components/layers/LayerBox";
import useStores from "hooks/useStores";

interface LayerBoxesProps {
  layers: string[];
}

const LayerContainer = observer(() => {
  const { LayerStore } = useStores();

  console.log("LayerStore", toJS(LayerStore.layers));

  const LayerBoxes: React.FC<LayerBoxesProps> = ({ layers }) => {
    return (
      <>
        {layers.map((_, index) => (
          <LayerBox key={index} name={"Layer " + index} />
        ))}
      </>
    );
  };

  return (
    <Container>
      <Title>Layers</Title>
      <LayerGroup>
        <LayerBoxes layers={LayerStore.layers} />
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
  width: 100%;
  height: 100%;
`;

export default LayerContainer;

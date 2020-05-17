import React from "react";
import styled from "styled-components";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { MdInbox } from "react-icons/md";

import LayerBox from "components/layers/LayerBox";
import useStores from "hooks/useStores";

interface LayerBoxesProps {
  layers: string[];
}

const LayerContainer = observer(() => {
  const { LayerStore } = useStores();

  console.log("LayerStore", toJS(LayerStore.layers));

  const LayerBoxes: React.FC<LayerBoxesProps> = ({ layers }) => {
    const layerList =
      layers.length > 0 ? (
        layers.map((_, index) => (
          <LayerBox key={index} name={"Layer " + index} />
        ))
      ) : (
        <DefaultLayers>
          <MdInbox size={"50%"} color={"#ccc"} />
          위에서 레이어를 추가 해 보세요
        </DefaultLayers>
      );

    return <>{layerList}</>;
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
  border: 1px solid #999;
  width: 100%;
  height: 100%;
`;

const DefaultLayers = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #999;
  height: 100%;
`;

export default LayerContainer;

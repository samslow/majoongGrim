import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdInbox } from "react-icons/md";
import { observer } from "mobx-react";
import { toJS } from "mobx";

import useStores from "hooks/useStores";
import LayerBox from "components/layers/LayerBox";
import ImageLayer from "modules/layers/ImageLayer";

interface LayerBoxesProps {
  layers: ImageLayer[];
}

const LayerBoxes: React.FC<LayerBoxesProps> = observer(({ layers }) => {
  const { LayerStore } = useStores();
  // const [layerStack, setLayerStack] = useState<ImageLayer[]>([]);
  useEffect(() => {
    // let orderedLayers: ImageLayer[] = [];
    // if (layers.length > 0) {
    //   orderedLayers = layers.slice().sort((a, b) => {
    //     return b.zIndex - a.zIndex;
    //   });
    // }
    // setLayerStack(orderedLayers);
    // console.log("orderedLayers", orderedLayers);
    console.log("render LayerBoxes");
  }, [layers]);

  const handleVerticalMove = (id: number, type: string) => {
    LayerStore.setZindex(id, type);
  };

  const handleRemoveLayer = (id: number) => {
    console.log(`${id} layer removed!`);
    LayerStore.removeLayer(id);
  };

  const layerList =
    LayerStore.layers.length > 0 ? (
      LayerStore.layers.map((layer: ImageLayer) => (
        <LayerBox
          key={layer.id}
          name={"image " + layer.id}
          onMove={(type) => handleVerticalMove(layer.id, type)}
          onRemove={() => handleRemoveLayer(layer.id)}
        />
      ))
    ) : (
      <DefaultLayers>
        <MdInbox size={"50%"} color={"#ccc"} />
        Try adding layers from above
      </DefaultLayers>
    );

  return <>{layerList}</>;
});

const DefaultLayers = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #999;
  height: 100%;
`;

export default LayerBoxes;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdInbox } from "react-icons/md";

import LayerBox from "components/layers/LayerBox";
import ImageLayer from "modules/layers/ImageLayer";
import TextLayer from "modules/layers/TextLayer";
import { useDispatch } from "react-redux";
import { SET_ZINDEX, REMOVE_LAYER } from "store/layerReducer";

interface LayerBoxesProps {
  layers: ImageLayer[];
}

const LayerBoxes: React.FC<LayerBoxesProps> = ({ layers }) => {
  const dispatch = useDispatch();

  const handleVerticalMove = (id: number, type: string) => {
    dispatch({
      type: SET_ZINDEX,
      id: id,
      _type: type,
    });
  };

  const handleRemoveLayer = (id: number) => {
    console.log(`${id} layer removed!`);
    dispatch({
      type: REMOVE_LAYER,
      id: id,
    });
  };

  const layerList =
    layers.length > 0 ? (
      layers.map((layer: ImageLayer | TextLayer) => {
        const layerType =
          layer instanceof ImageLayer === true ? "Image " : "Text ";

        return (
          <LayerBox
            key={layer.id}
            name={layerType + layer.id}
            onMove={(type) => handleVerticalMove(layer.id, type)}
            onRemove={() => handleRemoveLayer(layer.id)}
          />
        );
      })
    ) : (
      <DefaultLayers>
        <MdInbox size={"50%"} color={"#ccc"} />
        Try adding layers from above
      </DefaultLayers>
    );

  return <>{layerList}</>;
};

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

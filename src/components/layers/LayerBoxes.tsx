import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdInbox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import LayerBox from "components/layers/LayerBox";
import { LayerActions } from "store/layerReducer";
import Layer from "modules/layers/Layer";
import ImageLayer from "modules/layers/ImageLayer";
import { RootState } from "store";
import Theme from "modules/theme";

interface LayerBoxesProps {
  layers: Layer[];
}

const LayerBoxes: React.FC<LayerBoxesProps> = ({ layers }) => {
  const dispatch = useDispatch();
  const [ordered, setOrdered] = useState<Layer[]>([]);
  const selectedId = useSelector(
    (state: RootState) => state.layerReducer.selectedId,
  );

  useEffect(() => {
    if (layers.length > 0) {
      let orderedLayers = layers.slice().sort((a, b) => {
        return b.zIndex - a.zIndex;
      });
      setOrdered(orderedLayers);
    } else {
      setOrdered([]);
    }
  }, [layers]);

  const handleVerticalMove = (id: number, type: string) => {
    dispatch({
      type: LayerActions.SET_ZINDEX,
      id: id,
      _type: type,
    });
  };

  const handleRemoveLayer = (id: number) => {
    console.log(`${id} layer removed!`);
    dispatch({
      type: LayerActions.REMOVE_LAYER,
      id: id,
    });
    if (selectedId == id) {
      dispatch({
        type: LayerActions.SET_SELECTED,
      });
    }
  };

  const layerList =
    ordered.length > 0
      ? ordered.map((layer: Layer) => {
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
      : null;

  return (
    <>
      {layerList ? (
        <>{layerList}</>
      ) : (
        <DefaultLayers>
          <MdInbox size={"50%"} color={Theme.icon} />
          Try adding layers from above
        </DefaultLayers>
      )}
    </>
  );
};

const DefaultLayers = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${Theme.caption};
  height: 100%;
`;

export default LayerBoxes;

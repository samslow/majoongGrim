import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Layer from "modules/layers/Layer";
import ImageLayer from "modules/layers/ImageLayer";
import TextLayer from "modules/layers/TextLayer";
import ShapeLayer from "modules/layers/ShapeLayer";
import ArtBoard from "components/editor/ArtBoard";
import useStores from "hooks/useStores";
import { observer } from "mobx-react";
import DraggableImage from "components/editor/DraggableImage";

const DISTANCE_BORDER = 10;

const Container = styled.div`
  position: relative;
  background: grey;
  flex: 3;
`;

const EditorContainer = observer(() => {
  const { HeaderStore, LayerStore } = useStores();
  const [selected, setSelected] = useState(false);

  const [selectedLayerInfo, setSelectedLayerInfo] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onClickImageHandler = useCallback(
    (
      imgX: number,
      imgY: number,
      width: number,
      height: number,
      type: boolean,
    ) => {
      if (type === true) {
        setSelected(true);
      } else {
        setSelected(false);
      }
      setSelectedLayerInfo({ x: imgX, y: imgY, width: width, height: height });
    },
    [selected],
  );

  const onClickEditorHandler = useCallback(() => {
    setSelected(false);
  }, []);

  return (
    <Container onClick={onClickEditorHandler}>
      {LayerStore.layers.length
        ? LayerStore.layers.map((layer: ImageLayer, i: number) => {
            console.log(layer);
            return (
              <DraggableImage
                key={i}
                layer={layer}
                onClickImg={(
                  imgX: number,
                  imgY: number,
                  width: number,
                  height: number,
                  type: boolean,
                ) => onClickImageHandler(imgX, imgY, width, height, type)}
              />
            );
          })
        : null}
      {selected && (
        <div
          style={{
            position: "fixed",
            border: "4px dashed red",
            boxSizing: "border-box",
            width: selectedLayerInfo.width + DISTANCE_BORDER * 2,
            height: selectedLayerInfo.height + DISTANCE_BORDER * 2,
            left: selectedLayerInfo.x - DISTANCE_BORDER,
            top: selectedLayerInfo.y - DISTANCE_BORDER,
            zIndex: 9,
          }}
        ></div>
      )}
      <ArtBoard nowShape={HeaderStore.nowShape} />
    </Container>
  );
});

export default EditorContainer;

import React, { useState, useCallback } from "react";
import styled from "styled-components";
import ImageLayer from "modules/layers/ImageLayer";
import TextLayer from "modules/layers/TextLayer";
import ArtBoard from "components/editor/ArtBoard";
import DraggableImage from "components/editor/DraggableImage";
import DraggableText from "components/editor/DraggableText";
import { RootState } from "store";
import { useSelector } from "react-redux";
import Layer from "modules/layers/Layer";

// 레이어와 선택박스 거리
const DISTANCE_BORDER = 10;

// 선택박스 정보
interface SelectedBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

// 초기 선택박스 정보
const initialSelectedBox = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

const EditorContainer = () => {
  const nowShape: string = useSelector(
    (state: RootState) => state.headerReducer.nowShape,
  );
  const layers: ImageLayer[] = useSelector(
    (state: RootState) => state.layerReducer.layers,
  );
  console.log(layers);

  // 선택여부
  const [selected, setSelected] = useState(false);
  // 선택박스 정보
  const [selectedLayerInfo, setSelectedLayerInfo] = useState<SelectedBox>(
    initialSelectedBox,
  );

  const onClickImageHandler = useCallback(
    (
      imgX: number,
      imgY: number,
      width: number,
      height: number,
      isSelected: boolean,
    ) => {
      setSelected(isSelected === true ? true : false);
      const newSelectedBox = {
        x: imgX,
        y: imgY,
        width: width,
        height: height,
      };
      setSelectedLayerInfo(newSelectedBox);
    },
    [],
  );

  const onClickEditorHandler = useCallback(() => {
    setSelected(false);
  }, []);

  return (
    <Container onClick={onClickEditorHandler}>
      {layers.length > 0 &&
        layers.map((layer: Layer, i: number) => {
          if (layer instanceof ImageLayer) {
            return (
              <DraggableImage
                key={i}
                layer={layer}
                onClick={(
                  imgX: number,
                  imgY: number,
                  width: number,
                  height: number,
                  isSelected: boolean,
                ) => onClickImageHandler(imgX, imgY, width, height, isSelected)}
              />
            );
          } else if (layer instanceof TextLayer) {
            return (
              <DraggableText
                key={i}
                layer={layer}
                onClick={(
                  imgX: number,
                  imgY: number,
                  width: number,
                  height: number,
                  isSelected: boolean,
                ) => onClickImageHandler(imgX, imgY, width, height, isSelected)}
              />
            );
          } else {
            return null;
          }
        })}
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
        />
      )}
      <ArtBoard nowShape={nowShape} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: grey;
  flex: 3;
`;

export default EditorContainer;

import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import ImageLayer from "modules/layers/ImageLayer";
import TextLayer from "modules/layers/TextLayer";
import ArtBoard from "components/editor/ArtBoard";
import DraggableImage from "components/editor/DraggableImage";
import DraggableText from "components/editor/DraggableText";
import { RootState } from "store";
import Layer from "modules/layers/Layer";
import { SET_SELECTED, DESELECT } from "store/layerReducer";
import { CHANGE_SELECTED_TOOL } from "store/toolboxReducer";

// 레이어와 선택박스 거리
const DISTANCE_BORDER = 4;

// 선택박스 정보
interface SelectedBox {
  x: number;
  y: number;
  width: number;
  height: number;
  angleDegree: number;
}

// 초기 선택박스 정보
const initialSelectedBox = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  angleDegree: 0,
};

const EditorContainer = () => {
  const dispatch = useDispatch();
  const selectedId: number = useSelector(
    (state: RootState) => state.layerReducer.selectedId,
  );
  const nowShape: string = useSelector(
    (state: RootState) => state.headerReducer.nowShape,
  );
  const layers: Layer[] = useSelector(
    (state: RootState) => state.layerReducer.layers,
  );
  const controllerType: string = useSelector(
    (state: RootState) => state.toolboxReducer.selectedTool,
  );

  useEffect(() => {
    if (selectedId != null) {
      const layerInfo = layers[selectedId];
      const newSelectedBox = {
        x: layerInfo.x,
        y: layerInfo.y,
        width: layerInfo.width,
        height: layerInfo.height,
        angleDegree: layerInfo.angleDegree,
      };
      setSelected(true);
      setSelectedLayerInfo(newSelectedBox);
    } else {
      setSelected(false);
      setSelectedLayerInfo(initialSelectedBox);
    }
  }, [selectedId, layers]);

  // 선택여부
  const [selected, setSelected] = useState(false);
  // 선택박스 정보
  const [selectedLayerInfo, setSelectedLayerInfo] = useState<SelectedBox>(
    initialSelectedBox,
  );

  const onClickLayerHandler = useCallback(
    (
      id: number,
      imgX: number,
      imgY: number,
      width: number,
      height: number,
      angleDegree: number,
      isSelected: boolean,
      type?: string,
    ) => {
      setSelected(isSelected);
      const newSelectedBox = {
        x: imgX,
        y: imgY,
        width: width,
        height: height,
        angleDegree: angleDegree,
      };
      setSelectedLayerInfo(newSelectedBox);

      if (selectedId != id) {
        dispatch({
          type: SET_SELECTED,
          id: id,
        });
      }
      if (type && controllerType != type) {
        const typeName = type == "text" ? "텍스트 삽입" : "이미지 삽입";
        dispatch({
          type: CHANGE_SELECTED_TOOL,
          name: typeName,
        });
      }
    },
    [selectedId],
  );

  const onClickEditorHandler = useCallback(() => {
    setSelected(false);
    dispatch({
      type: SET_SELECTED,
      id: DESELECT,
    });
    dispatch({
      type: CHANGE_SELECTED_TOOL,
      name: "",
    });
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
                onClick={onClickLayerHandler}
              />
            );
          } else if (layer instanceof TextLayer) {
            return (
              <DraggableText
                key={i}
                layer={layer}
                onClick={onClickLayerHandler}
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
            transform: `rotate(${selectedLayerInfo.angleDegree}deg)`,
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

import React, { useCallback } from "react";
import styled from "styled-components";
import { MdMessage } from "react-icons/md";
import { BsFillImageFill } from "react-icons/bs";
import { observer } from "mobx-react";

import useStores from "hooks/useStores";
import ToolboxContentBox from "components/Toolbox/ToolboxContentBox";
import ImageContentBox from "components/Toolbox/ImageContentBox";
import { resizeImage } from "modules/functions/resizeImage";
import { getArtboardCenterPosition } from "modules/functions/getArtboardCenterPosition";
import ImageLayer from "modules/layers/ImageLayer";
import TextLayer from "modules/layers/TextLayer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { CHANGE_SELECTED_TOOL } from "store/toolboxReducer";
import { ADD_LAYER } from "store/layerReducer";

export enum ToolboxType {
  IMAGE = "이미지 삽입",
  TEXT = "텍스트 삽입",
}

const Toolbox = () => {
  const dispatch = useDispatch();
  const selectedTool: string = useSelector(
    (state: RootState) => state.toolboxReducer.selectedTool,
  );
  const layers: ImageLayer[] = useSelector(
    (state: RootState) => state.layerReducer.layers,
  );
  const nowShape: string = useSelector(
    (state: RootState) => state.headerReducer.nowShape,
  );
  const handleTool = (name: string) => {
    dispatch({
      type: CHANGE_SELECTED_TOOL,
      name: name,
    });
    if (name == ToolboxType.TEXT) {
      handleText();
    }
  };

  const handleActive = useCallback((type: string) => {
    if (selectedTool == type) {
      return true;
    }

    return false;
  }, []);

  const handleImage = useCallback((e: any) => {
    const reader = new FileReader();

    // FileReader load 이벤트핸들러 등록 (성공시에만 트리거됨)
    reader.onload = (event: any) => {
      const img = new Image();
      img.src = event.target.result;

      // Image load 이벤트핸들러 등록
      img.onload = () => {
        const [width, height] = resizeImage(img, nowShape);
        const [x, y] = getArtboardCenterPosition(width, height);
        const imgLayer = new ImageLayer(
          layers.length,
          x,
          y,
          width,
          height,
          0,
          layers.length + 10, // 0부터 레이어 번호를 매기면서 10부터 zIndex를 부여함
          img,
        );
        dispatch({
          type: ADD_LAYER,
          layer: imgLayer,
        });
      };
    };

    // FileReader가 데이터 읽기 시작 -> 데이터 다 읽으면 load이벤트 발생
    reader.readAsDataURL(e.target.files[0]);
  }, []);

  const handleText = () => {
    const [width, height] = [200, 30];
    const [x, y] = getArtboardCenterPosition(width, height);
    console.log("x, y", x, y);
    const newTextLayer = new TextLayer(
      layers.length,
      x,
      y,
      width,
      height,
      0,
      layers.length + 10,
      "normal",
      12,
      "#000",
      "여기에 텍스트를 입력하세요",
    );
    console.log("newTextLayer", newTextLayer);
    dispatch({
      type: ADD_LAYER,
      layer: newTextLayer,
    });
  };

  return (
    <Container>
      <ContentRow>
        <ImageContentBox
          name={ToolboxType.IMAGE}
          icon={<BsFillImageFill size="60%" color={"#888"} />}
          onClickTool={handleTool}
          onChangeTool={handleImage}
          isActive={handleActive(ToolboxType.IMAGE)}
        />
        <ToolboxContentBox
          name={ToolboxType.TEXT}
          icon={<MdMessage size="60%" color={"#888"} />}
          onClickTool={handleTool}
          isActive={handleActive(ToolboxType.TEXT)}
        />
        <ToolboxContentBox />
      </ContentRow>
      <ContentRow>
        <ToolboxContentBox />
        <ToolboxContentBox />
        <ToolboxContentBox />
      </ContentRow>
      <ContentRow>
        <ToolboxContentBox />
        <ToolboxContentBox />
        <ToolboxContentBox />
      </ContentRow>
    </Container>
  );
};

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background: #eee;
  z-index: 1000;
`;

const ContentRow = styled.div`
  display: flex;
  width: "100%";
  height: 100px;
`;

export default Toolbox;

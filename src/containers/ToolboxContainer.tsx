import React from "react";
import styled from "styled-components";
import { MdMessage } from "react-icons/md";
import { BsFillImageFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import ToolboxContentBox from "components/Toolbox/ToolboxContentBox";
import ImageContentBox from "components/Toolbox/ImageContentBox";
import { resizeImage } from "modules/functions/resizeImage";
import { getArtboardCenterPosition } from "modules/functions/getArtboardCenterPosition";
import ImageLayer from "modules/layers/ImageLayer";
import TextLayer from "modules/layers/TextLayer";
import { RootState } from "store";
import { ToolboxActions } from "store/toolboxReducer";
import { LayerActions } from "store/layerReducer";
import Layer from "modules/layers/Layer";
import Theme from "modules/theme";

export enum ToolboxType {
  IMAGE = "이미지 삽입",
  TEXT = "텍스트 삽입",
}

const Toolbox = () => {
  const dispatch = useDispatch();
  const layers: Layer[] = useSelector(
    (state: RootState) => state.layerReducer.layers,
  );
  const nowShape: string = useSelector(
    (state: RootState) => state.headerReducer.nowShape,
  );
  const handleTool = (name: string, e: any = null) => {
    dispatch({
      type: ToolboxActions.CHANGE_SELECTED_TOOL,
      name: name,
    });
    if (name == ToolboxType.TEXT) {
      handleText();
    } else if (name == ToolboxType.IMAGE) {
      handleImage(e);
    }
  };

  const handleImage = (e: any) => {
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
          type: LayerActions.ADD_LAYER,
          layer: imgLayer,
        });
      };
    };

    // FileReader가 데이터 읽기 시작 -> 데이터 다 읽으면 load이벤트 발생
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleText = () => {
    const INITIAL_FONT_SIZE = 12;
    const OFFSET = 10;
    const [width, height] = [INITIAL_FONT_SIZE * OFFSET, INITIAL_FONT_SIZE];
    const [x, y] = getArtboardCenterPosition(width, height);

    const newTextLayer = new TextLayer(
      layers.length,
      x,
      y,
      width,
      height,
      0,
      layers.length + 10,
      "나눔바른고딕",
      { isBold: false, isItalic: false, isUnderline: false },
      12,
      "#000",
      "텍스트를 입력하세요",
    );

    dispatch({
      type: LayerActions.ADD_LAYER,
      layer: newTextLayer,
      id: newTextLayer.id,
    });
  };

  return (
    <Container>
      <ContentRow>
        <ImageContentBox
          name={ToolboxType.IMAGE}
          icon={<BsFillImageFill size="60%" color={Theme.icon} />}
          onClickTool={handleTool}
        />
        <ToolboxContentBox
          name={ToolboxType.TEXT}
          icon={<MdMessage size="60%" color={Theme.icon} />}
          onClickTool={handleTool}
        />
        <ToolboxContentBox />
      </ContentRow>
    </Container>
  );
};

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background: ${Theme.dark};
  z-index: 1000;
  border-bottom: 1px solid ${Theme.border};
`;

const ContentRow = styled.div`
  display: flex;
  width: "100%";
  height: 100px;
`;

export default Toolbox;

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "store";
import ImageLayer from "modules/layers/ImageLayer";
import TextLayer from "modules/layers/TextLayer";
import { getArtboardCenterPosition } from "modules/functions/getArtboardCenterPosition";
import Layer from "modules/layers/Layer";
import { getTextLayerWidth } from "modules/functions/getTextLayerWidth";

const VERTICAL_SHAPE = "VERTICAL_SHAPE";
const HORIZONTAL_SHAPE = "HORIZONTAL_SHAPE";

interface ComponentProps {
  verticalText: string;
  horizontalText: string;
  downloadText: string;
  onClickShape: Function;
}

const HeaderButtons: React.FC<ComponentProps> = ({
  verticalText,
  horizontalText,
  downloadText,
  onClickShape,
}) => {
  const layers: Layer[] = useSelector(
    (state: RootState) => state.layerReducer.layers,
  );
  const nowShape: string = useSelector(
    (state: RootState) => state.headerReducer.nowShape,
  );

  const makeCanvas = (e: any) => {
    // canvas 생성
    const canvas: any = document.createElement("canvas");
    if (nowShape === "VERTICAL_SHAPE") {
      canvas.width = 280;
      canvas.height = 400;
    } else {
      canvas.width = 480;
      canvas.height = 280;
    }
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    const CANVAS_WIDTH = canvas.width;
    const CANVAS_HEIGHT = canvas.height;
    const [ARTBOARD_X, ARTBOARD_Y] = getArtboardCenterPosition(
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
    );
    // 1. canvas를 흰바탕으로 칠해줌
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // canvas를 그릴때, layers를 모두 불러와 z-index를 오름차순으로 정렬 (가장 밑부분 레이어부터 그리기!)
    const sortedLayers = [...layers].sort((a, b) => {
      return a.zIndex - b.zIndex;
    });
    for (let i = 0; i < sortedLayers.length; i++) {
      const target = sortedLayers[i] as ImageLayer;
      const layerCenterX = target.x - ARTBOARD_X + target.width / 2;
      const layerCenterY = target.y - ARTBOARD_Y + target.height / 2;
      ctx.translate(layerCenterX, layerCenterY);
      ctx.rotate((target.angleDegree * Math.PI) / 180);
      ctx.translate(-layerCenterX, -layerCenterY);
      target.setType(ctx, ARTBOARD_X, ARTBOARD_Y);
      target.draw(ctx, ARTBOARD_X, ARTBOARD_Y);
      ctx.translate(layerCenterX, layerCenterY);
      ctx.rotate(-(target.angleDegree * Math.PI) / 180);
      ctx.translate(-layerCenterX, -layerCenterY);
    }
    // 3. 그린 canvas정보를 URL 형태로 href 속성으로 전달
    // click event handler -> href 순서로 진행됨.
    e.target.href = canvas.toDataURL();
  };

  return (
    <ButtonContainer>
      <button onClick={() => onClickShape(VERTICAL_SHAPE)}>
        {verticalText}
      </button>
      <button onClick={() => onClickShape(HORIZONTAL_SHAPE)}>
        {horizontalText}
      </button>
      <button>
        <a onClick={makeCanvas} href="/" download="마중그림썸네일.png">
          {downloadText}
        </a>
      </button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  padding: 0px 30px 0px 30px;

  & > button {
    cursor: pointer;
    width: 70px;
    height: 30px;
    font-size: 12px;
    margin: 0px 5px 0px 5px;
    border-radius: 3px;
  }
  & > button > a {
    text-decoration: none;
    color: initial;
  }
`;

export default HeaderButtons;

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

import { RootState } from "store";
import ImageLayer from "modules/layers/ImageLayer";
import { getArtboardCenterPosition } from "modules/functions/getArtboardCenterPosition";
import Layer from "modules/layers/Layer";
import { AiOutlineDownload } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import Theme from "modules/theme";

const VERTICAL_SHAPE = "VERTICAL_SHAPE";
const HORIZONTAL_SHAPE = "HORIZONTAL_SHAPE";

interface ComponentProps {
  onClickShape: Function;
}

const HeaderButtons: React.FC<ComponentProps> = ({ onClickShape }) => {
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
      target.draw(ctx, ARTBOARD_X, ARTBOARD_Y);
      ctx.translate(layerCenterX, layerCenterY);
      ctx.rotate(-(target.angleDegree * Math.PI) / 180);
      ctx.translate(-layerCenterX, -layerCenterY);
    }
    // 3. 그린 canvas정보를 URL 형태로 href 속성으로 전달
    // click event handler -> href 순서로 진행됨.
    e.currentTarget.href = canvas.toDataURL();
  };
  return (
    <ButtonContainer>
      <Dropdown style={{ zIndex: 1001, marginRight: "1em" }}>
        <Dropdown.Toggle
          variant="outline-dark"
          id="dropdown-basic"
          style={{ background: Theme.primary }}
        >
          <Title>
            <BsPlusCircle style={{ marginRight: "5px" }} />
            New
          </Title>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onClickShape(VERTICAL_SHAPE)}>
            세로형
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onClickShape(HORIZONTAL_SHAPE)}>
            가로형
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="outline-dark" style={{ background: Theme.primary }}>
        <a onClick={makeCanvas} href="/" download="Majoong_Thumbnail.png">
          <Title style={{ margin: "auto" }}>
            <AiOutlineDownload />
          </Title>
        </a>
      </Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.span`
  font-weight: bold;
  margin-right: 5px;
  color: #fff;
  vertical-align: text-bottom;
`;

export default HeaderButtons;

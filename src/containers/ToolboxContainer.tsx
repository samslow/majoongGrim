import React from "react";
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

export enum ToolboxType {
  IMAGE = "이미지 삽입",
  TEXT = "텍스트 삽입",
}

const Toolbox = observer(() => {
  const { ToolboxStore, LayerStore, HeaderStore } = useStores();

  const handleTool = (name: string) => {
    ToolboxStore.selectedTool = name;
  };

  const handleActive = (type: string) => {
    if (name === "이미지 삽입") {
      console.log("dd");
    }
    if (ToolboxStore.selectedTool == type) {
      return true;
    }

    return false;
  };

  const handleImage = (e: any) => {
    const reader = new FileReader();

    // FileReader load 이벤트핸들러 등록 (성공시에만 트리거됨)
    reader.onload = (event: any) => {
      const img = new Image();
      img.src = event.target.result;

      // Image load 이벤트핸들러 등록
      img.onload = () => {
        const [width, height] = resizeImage(img, HeaderStore.nowShape);
        const [x, y] = getArtboardCenterPosition(width, height);
        const imgLayer = new ImageLayer(
          LayerStore.layers.length,
          x,
          y,
          width,
          height,
          0,
          10,
          img,
        );
        LayerStore.layers.push(imgLayer);
      };
    };

    // FileReader가 데이터 읽기 시작 -> 데이터 다 읽으면 load이벤트 발생
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Container>
      <ContentRow>
        <ImageContentBox
          name={ToolboxType.IMAGE}
          icon={<BsFillImageFill size="60%" color={"#888"} />}
          onClickTool={(name: string) => handleTool(name)}
          onChangeTool={(e: Event) => handleImage(e)}
          isActive={handleActive(ToolboxType.IMAGE)}
        />
        <ToolboxContentBox
          name={ToolboxType.TEXT}
          icon={<MdMessage size="60%" color={"#888"} />}
          onClickTool={(name: string) => handleTool(name)}
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
});

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

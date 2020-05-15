import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineRotateRight } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { FaShapes } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";
import { IoIosColorFilter } from "react-icons/io";
import { observer } from "mobx-react";

import useStores from "hooks/useStores";
import ToolboxContentBox from "components/Toolbox/ContentBox";
import ImageContentBox from "components/Toolbox/ImageContentBox";
import { resizeImage } from "modules/layers/resizeImage";
import { getArtboardCenterPosition } from "modules/functions/getArtboardCenterPosition";
import ImageLayer from "modules/functions/ImageLayer";

const Toolbox = observer(() => {
  const { ToolboxStore, LayerStore, HeaderStore } = useStores();

  const handleTool = (name: string) => {
    ToolboxStore.selectedTool = name;
    if (name === "이미지 삽입") {
      console.log("dd");
    }
  };

  const handleImage = (e: any) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const [width, height] = resizeImage(img, HeaderStore.nowShape);
        const [x, y] = getArtboardCenterPosition(width, height);
        const imgLayer = new ImageLayer(x, y, width, height, 0, 10, img);
        LayerStore.layers.push(imgLayer);
      };
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Container>
      <ContentRow>
        <ToolboxContentBox
          name={"화면 회전"}
          icon={<AiOutlineRotateRight size="60%" color={"#888"} />}
          onClickTool={(name: string) => handleTool(name)}
        />
        <ToolboxContentBox
          name={"텍스트 삽입"}
          icon={<MdMessage size="60%" color={"#888"} />}
          onClickTool={(name: string) => handleTool(name)}
        />
        <ToolboxContentBox
          name={"도형 삽입"}
          icon={<FaShapes size="60%" color={"#888"} />}
          onClickTool={(name: string) => handleTool(name)}
        />
      </ContentRow>
      <ContentRow>
        <ImageContentBox
          name={"이미지 삽입"}
          icon={<BsFillImageFill size="60%" color={"#888"} />}
          onClickTool={(name: string) => handleTool(name)}
          onChangeTool={(e: Event) => handleImage(e)}
        />
        <ToolboxContentBox
          name={"필터"}
          icon={<IoIosColorFilter size="60%" color={"#888"} />}
          onClickTool={(name: string) => handleTool(name)}
        />
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
`;

const ContentRow = styled.div`
  display: flex;
  width: "100%";
  height: 100px;
`;

export default Toolbox;

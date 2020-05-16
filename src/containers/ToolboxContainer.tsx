import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineRotateRight } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { FaShapes } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";
import { IoIosColorFilter } from "react-icons/io";
import { observer } from "mobx-react";

import useStores from "hooks/useStores";
<<<<<<< Updated upstream
import ToolboxContentBox from "components/Toolbox/ContentBox";
=======
import ToolboxContentBox from "components/Toolbox/ToolboxContentBox";
import ImageContentBox from "components/Toolbox/ImageContentBox";
import { resizeImage } from "modules/functions/resizeImage";
import { getArtboardCenterPosition } from "modules/functions/getArtboardCenterPosition";
import ImageLayer from "modules/layers/ImageLayer";

export enum ToolboxType {
  IMAGE = "이미지 삽입",
  TEXT = "텍스트 삽입",
}
>>>>>>> Stashed changes

const Toolbox = observer(() => {
  const { ToolboxStore } = useStores();

  const handleTool = (name: string) => {
    ToolboxStore.selectedTool = name;
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
        <ToolboxContentBox
          name={"이미지 삽입"}
          icon={<BsFillImageFill size="60%" color={"#888"} />}
          onClickTool={(name: string) => handleTool(name)}
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

import React from "react";
import styled from "styled-components";
import { MdMessage } from "react-icons/md";
import { BsFillImageFill } from "react-icons/bs";
import { observer } from "mobx-react";

import useStores from "hooks/useStores";
import ToolboxContentBox from "components/Toolbox/ToolboxContentBox";

export enum ToolboxType {
  IMAGE = "이미지 삽입",
  TEXT = "텍스트 삽입",
}

const Toolbox = observer(() => {
  const { ToolboxStore } = useStores();

  const handleTool = (name: string) => {
    ToolboxStore.selectedTool = name;
  };

  const handleActive = (type: string) => {
    if (ToolboxStore.selectedTool == type) {
      return true;
    }

    return false;
  };

  return (
    <Container>
      <ContentRow>
        <ToolboxContentBox
          name={ToolboxType.IMAGE}
          icon={<BsFillImageFill size="60%" color={"#888"} />}
          onClickTool={(name: string) => handleTool(name)}
          isActive={handleActive(ToolboxType.IMAGE)}
        />
        <ToolboxContentBox
          name={"텍스트 삽입"}
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
`;

const ContentRow = styled.div`
  display: flex;
  width: "100%";
  height: 100px;
`;

export default Toolbox;

import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import useStores from "hooks/useStores";

const ControllerContainer = observer(() => {
  const { ToolboxStore } = useStores();

  return (
    <Container>
      {ToolboxStore.selectedTool
        ? ToolboxStore.selectedTool
        : "툴을 선택하세요."}
    </Container>
  );
});

const Container = styled.div`
  background: purple;
  flex: 1;
`;

export default ControllerContainer;

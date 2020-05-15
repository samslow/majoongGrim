import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import useStores from "hooks/useStores";
import { ToolboxType } from "containers/ToolboxContainer";
import InsertText from "components/controllers/InsertText";
import DefaultController from "components/controllers/DefaultController";

const ControllerContainer = observer(() => {
  const { ToolboxStore } = useStores();

  const SwitchController = ({ type }: { type: string }) => {
    let result;

    switch (type) {
      case ToolboxType.TEXT:
        result = <InsertText />;
        break;
      case ToolboxType.IMAGE:
      default:
        result = <DefaultController />;
        break;
    }
    return result;
  };

  return (
    <Container>
      <SwitchController type={ToolboxStore.selectedTool} />
    </Container>
  );
});

const Container = styled.div`
  background: #666;
  flex: 1;
  display: flex;
  padding: 1em;
`;

export default ControllerContainer;

import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import useStores from "hooks/useStores";
import { ToolboxType } from "containers/ToolboxContainer";
import TextController from "components/controllers/TextController";
import DefaultController from "components/controllers/DefaultController";

interface SwitchProps {
  type: string;
}

const ControllerContainer = observer(() => {
  const { ToolboxStore } = useStores();

  const SwitchController: React.FC<SwitchProps> = ({ type }) => {
    let result;

    switch (type) {
      case ToolboxType.TEXT:
        result = <TextController />;
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
  z-index: 1000;
`;

export default ControllerContainer;

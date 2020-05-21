import React from "react";
import styled from "styled-components";

import { ToolboxType } from "containers/ToolboxContainer";
import TextController from "components/controllers/TextController";
import DefaultController from "components/controllers/DefaultController";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface SwitchProps {
  type: string;
}

const ControllerContainer = () => {
  const selectedTool: string = useSelector(
    (state: RootState) => state.toolboxReducer.selectedTool,
  );

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
      <SwitchController type={selectedTool} />
    </Container>
  );
};

const Container = styled.div`
  background: #666;
  flex: 1;
  display: flex;
  padding: 1em;
  z-index: 1000;
`;

export default ControllerContainer;

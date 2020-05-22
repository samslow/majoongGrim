import React from "react";
import styled from "styled-components";
import { IoIosDocument } from "react-icons/io";

interface ComponentProps {
  name?: string;
  icon?: any;
  onClickTool?: Function;
}

const ToolboxContentBox: React.FC<ComponentProps> = ({
  name = "",
  icon = <IoIosDocument size="60%" color={"#DDD"} />,
  onClickTool,
}) => {
  return (
    <ContentBox onClick={() => name.length && onClickTool && onClickTool(name)}>
      <ContentIcon>{icon}</ContentIcon>
      {name.length > 0 && <ContentName>{name}</ContentName>}
    </ContentBox>
  );
};

const ContentBox = styled.button`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: #8888;

  &:hover {
    background: #bbb;
  }
  &:active {
    background: #666;
  }
  &:focus {
    outline: none;
  }
`;

const ContentIcon = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

const ContentName = styled.div`
  display: flex;
  flex: 1;
  font-size: 1em;
`;

export default ToolboxContentBox;

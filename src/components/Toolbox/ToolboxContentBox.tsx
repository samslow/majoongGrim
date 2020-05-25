import React from "react";
import styled from "styled-components";
import { IoIosDocument } from "react-icons/io";
import Theme from "modules/theme";

interface ComponentProps {
  name?: string;
  icon?: any;
  onClickTool?: Function;
}

const ToolboxContentBox: React.FC<ComponentProps> = ({
  name = "",
  icon = <IoIosDocument size="60%" color={Theme.icon} />,
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
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border: 0;
  background-color: transparent;

  &:hover {
    background: #bbb;
  }
  &:focus {
    outline: none;
  }
`;

const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentName = styled.div`
  font-size: 12px;
  color: ${Theme.caption};
`;

export default ToolboxContentBox;

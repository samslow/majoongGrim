import React from "react";
import styled from "styled-components";
import { IoIosDocument } from "react-icons/io";

interface ComponentProps {
  name?: string;
  icon?: any;
  onClickTool: Function;
  onChangeTool: Function;
  isActive?: boolean;
}

const ImageContentBox: React.FC<ComponentProps> = ({
  name = "",
  icon = <IoIosDocument size="60%" color={"#DDD"} />,
  onClickTool,
  onChangeTool,
  isActive,
}) => {
  return (
    <ContentBox
      onClick={() => name.length && onClickTool && onClickTool(name)}
      isActive={isActive || false}
    >
      <FileLabel
        style={{ width: "100%", height: "100%" }}
        htmlFor="imageLoader"
      />
      <ContentIcon>{icon}</ContentIcon>
      <ContentName>{name}</ContentName>
      <input
        type="file"
        id="imageLoader"
        name="imageLoader"
        accept="image/png,image/jpg,image/jpeg"
        hidden
        onChange={(e: any) => {
          onChangeTool(e);
          e.target.value = ``;
        }}
      />
    </ContentBox>
  );
};

interface StyledProps {
  isActive: boolean;
}

const ContentBox = styled.button<StyledProps>`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  background: ${(props) => (props.isActive ? "#666" : "transparent")};
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

const FileLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default ImageContentBox;

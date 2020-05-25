import React from "react";
import styled from "styled-components";
import { IoIosDocument } from "react-icons/io";
import Theme from "modules/theme";

interface ComponentProps {
  name?: string;
  icon?: any;
  onClickTool: Function;
}

const ImageContentBox: React.FC<ComponentProps> = ({
  name = "",
  icon,
  onClickTool,
}) => {
  return (
    <ContentBox>
      <FileLabel htmlFor="imageLoader" />
      <ContentIcon>{icon}</ContentIcon>
      <ContentName>{name}</ContentName>
      <input
        type="file"
        id="imageLoader"
        name="imageLoader"
        accept="image/png,image/jpg,image/jpeg"
        hidden
        onChange={(e: any) => {
          onClickTool(name, e);
          e.target.value = ``;
        }}
      />
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

const FileLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default ImageContentBox;

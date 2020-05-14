import React from "react";
import styled from "styled-components";
import { IoIosDocument } from "react-icons/io";
import ImageLayer from "modules/ImageLayer";
import useStores from "hooks/useStores";
import { resizeImage } from "modules/resizeImage";
import { getArtboardCenterPosition } from "modules/getArtboardCenterPosition";

interface ComponentProps {
  name?: string;
  icon?: any;
  onClickTool?: Function;
}

const ImageContentBox: React.FC<ComponentProps> = ({
  name = "",
  icon = <IoIosDocument size="60%" color={"#DDD"} />,
  onClickTool,
}) => {
  const { LayerStore, HeaderStore } = useStores();

  const handleImage = (e: any) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const [width, height] = resizeImage(img, HeaderStore.nowShape);
        const [x, y] = getArtboardCenterPosition(width, height);
        const imgLayer = new ImageLayer(x, y, width, height, 0, 10, img);
        LayerStore.layers.push(imgLayer);
      };
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <ContentBox onClick={() => name.length && onClickTool && onClickTool(name)}>
      <FileLabel
        style={{ width: "100%", height: "100%" }}
        htmlFor="imageLoader"
      ></FileLabel>
      <ContentIcon>{icon}</ContentIcon>
      {name.length > 0 && <ContentName>{name}</ContentName>}
      <input
        type="file"
        id="imageLoader"
        name="imageLoader"
        accept="image/png,image/jpg,image/jpeg"
        hidden
        onChange={handleImage}
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
  background: transparent;
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

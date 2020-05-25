import React from "react";
import ImageLayer from "modules/layers/ImageLayer";
import styled from "styled-components";

import useDrag from "hooks/useDrag";

interface ComponentProps {
  layer: ImageLayer;
  onClick: Function;
}

const DraggableImage: React.FC<ComponentProps> = ({ layer, onClick }) => {
  const {
    imgX,
    imgY,
    onDragStartImageHandler,
    onDragImageHandler,
    onDragOverImageHandler,
    onDragEndImageHandler,
  } = useDrag(layer, onClick);
  const { id, width, height, angleDegree, zIndex, image } = layer;

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick(id, imgX, imgY, width, height, angleDegree, true, "image");
  };

  return (
    <div
      draggable="true"
      onDrag={onDragImageHandler}
      onDragStart={onDragStartImageHandler}
      onDragOver={onDragOverImageHandler}
      onDragEnd={onDragEndImageHandler}
      onClick={onClickHandler}
      style={{
        position: "fixed",
        width: width,
        height: height,
        left: imgX,
        top: imgY,
        zIndex: zIndex,
        transform: `rotate(${angleDegree}deg)`,
      }}
    >
      <Img src={image.src} />
    </div>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  src: ${(props) => props.src};
`;

export default DraggableImage;

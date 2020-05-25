import React, { useCallback, useState } from "react";
import TextLayer from "modules/layers/TextLayer";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CHANGE_LAYER_LOCATION } from "store/layerReducer";
import useDrag from "hooks/useDrag";

interface ComponentProps {
  layer: TextLayer;
  onClick: Function;
}

const DraggableText: React.FC<ComponentProps> = ({ layer, onClick }) => {
  const {
    imgX,
    imgY,
    onDragStartImageHandler,
    onDragImageHandler,
    onDragOverImageHandler,
    onDragEndImageHandler,
  } = useDrag(layer, onClick);
  const {
    id,
    width,
    height,
    angleDegree,
    zIndex,
    fontFamily,
    fontSize,
    fontType,
    content,
    color,
  } = layer;

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick(id, imgX, imgY, width, height, angleDegree, true, "text");
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
        display: "flex",
        alignItems: "center",
        transform: `rotate(${angleDegree}deg)`,
      }}
    >
      <Text
        id={`text${id}`}
        fontFamily={fontFamily}
        fontType={fontType}
        fontSize={fontSize}
        color={color}
      >
        {content}
      </Text>
    </div>
  );
};
const Text = styled.p<TextProps>`
  position: absolute;
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => (props.fontType.isItalic ? "italic" : "normal")};
  font-weight: ${(props) => (props.fontType.isBold ? "bold" : "normal")};
  text-decoration: ${(props) =>
    props.fontType.isUnderline ? "underline" : "none"};
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  margin: 0;
  top: 0;
`;

interface TextProps {
  fontFamily: string;
  fontType: { isBold: boolean; isItalic: boolean; isUnderline: boolean };
  fontSize: number;
  color: string;
}

export default DraggableText;

import React, { useCallback, useState } from "react";
import TextLayer from "modules/layers/TextLayer";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CHANGE_LAYER_LOCATION } from "store/layerReducer";

interface ComponentProps {
  layer: TextLayer;
  onClick: Function;
}

const DraggableText: React.FC<ComponentProps> = ({ layer, onClick }) => {
  const dispatch = useDispatch();
  const {
    id,
    x,
    y,
    width,
    height,
    zIndex,
    fontType,
    fontSize,
    color,
    content,
  } = layer;
  // 텍스트 좌표
  const [imgX, setImgX] = useState(x);
  const [imgY, setImgY] = useState(y);
  // 드래그 시작시, 텍스트 좌표
  const [firstImgX, setFirstImgX] = useState(0);
  const [firstImgY, setFirstImgY] = useState(0);
  // 드래그 시작시, e.client 좌표
  const [firstEventClientX, setFirstEventClientX] = useState(0);
  const [firstEventClientY, setFirstEventClientY] = useState(0);

  // 드래그 스타트 (기존의 텍스트좌표와 e.client좌표 저장)
  const onDragStartImageHandler = useCallback(
    (e: React.DragEvent<HTMLImageElement>) => {
      onClick(id, imgX, imgY, width, height, false);
      setFirstEventClientX(e.clientX);
      setFirstEventClientY(e.clientY);
      setFirstImgX(imgX);
      setFirstImgY(imgY);
    },
    [imgX, imgY],
  );

  // 드래그 도중 (기존의 텍스트좌표의 e.client좌표와 현재 드래그 도중의 e.client좌표 차이만큼 텍스트좌표에 더해서 저장)
  const onDragImageHandler = useCallback(
    (e: React.DragEvent<HTMLImageElement>) => {
      const xChange = e.clientX - firstEventClientX;
      const yChange = e.clientY - firstEventClientY;
      setImgX(firstImgX + xChange);
      setImgY(firstImgY + yChange);
    },
    [firstEventClientX, firstEventClientY, firstImgX, firstImgY],
  );

  // drop을 사용하려면 dragover 이벤트핸들러를 만들고 e.preventDefault()로 전파를 막아야주어야함.
  const onDragOverImageHandler = useCallback(
    (e: React.DragEvent<HTMLImageElement>) => {
      e.preventDefault();
    },
    [],
  );

  // 드래그 종료 (redux layers 상태변경)
  const onDragEndImageHandler = useCallback(() => {
    dispatch({
      type: CHANGE_LAYER_LOCATION,
      id: id,
      x: imgX,
      y: imgY,
    });
  }, [imgX, imgY]);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick(id, imgX, imgY, width, height, true);
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
      }}
    >
      <Text fontType={fontType} fontSize={fontSize} color={color}>
        {content}
      </Text>
    </div>
  );
};
const Text = styled.p<TextProps>`
  font-style: ${(props) => (props.fontType.isItalic ? "italic" : "normal")};
  font-weight: ${(props) => (props.fontType.isBold ? "bold" : "normal")};
  text-decoration: ${(props) =>
    props.fontType.isUnderline ? "underline" : "none"};
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  margin: 0;
`;

interface TextProps {
  fontType: { isBold: boolean; isItalic: boolean; isUnderline: boolean };
  fontSize: number;
  color: string;
}

export default DraggableText;

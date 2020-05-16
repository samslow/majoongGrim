import React, { useCallback, useState } from "react";

interface ComponentProps {
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
  zIndex: number;
}

const DraggableImage: React.FC<ComponentProps> = ({
  src,
  width,
  height,
  x,
  y,
  zIndex,
}) => {
  const [imgX, setImgX] = useState(x);
  const [imgY, setImgY] = useState(y);
  const [firstImgX, setFirstImgX] = useState(0);
  const [firstImgY, setFirstImgY] = useState(0);
  const [firstEventClientX, setFirstEventClientX] = useState(0);
  const [firstEventClientY, setFirstEventClientY] = useState(0);

  // 드래그 스타트 (기존의 이미지좌표와 e.client좌표 저장)
  const onDragStartImageHandler = useCallback(
    (e: React.DragEvent<HTMLImageElement>) => {
      setFirstEventClientX(e.clientX);
      setFirstEventClientY(e.clientY);
      setFirstImgX(imgX);
      setFirstImgY(imgY);
    },
    [imgX, imgY],
  );

  // 드래그 도중 (기존의 이미지좌표의 e.client좌표와 현재 드래그 도중의 e.client좌표 차이만큼 이미지좌표에 더해서 저장)
  const onDragImageHandler = useCallback(
    (e: React.DragEvent<HTMLImageElement>) => {
      const xChange = e.clientX - firstEventClientX;
      const yChange = e.clientY - firstEventClientY;
      setImgX(firstImgX + xChange);
      setImgY(firstImgY + yChange);
    },
    [firstEventClientX, firstEventClientY, firstImgX, firstImgY],
  );

  // drop을 사용하려면 e.preventDefault()로 dragover 이벤트의 전파를 막아야함.
  const onDragOverImageHandler = useCallback(
    (e: React.DragEvent<HTMLImageElement>) => {
      e.preventDefault();
    },
    [],
  );

  return (
    <img
      draggable="true"
      onDrag={onDragImageHandler}
      onDragStart={onDragStartImageHandler}
      onDragOver={onDragOverImageHandler}
      style={{
        position: "fixed",
        width: width,
        height: height,
        left: imgX,
        top: imgY,
        zIndex: zIndex,
      }}
      src={src}
    ></img>
  );
};

export default DraggableImage;

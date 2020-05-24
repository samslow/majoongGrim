import React, { useCallback, useState, useEffect } from "react";
import ImageLayer from "modules/layers/ImageLayer";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { CHANGE_LAYER_LOCATION } from "store/layerReducer";

interface ComponentProps {
  layer: ImageLayer;
  onClick: Function;
}

const DraggableImage: React.FC<ComponentProps> = ({ layer, onClick }) => {
  const dispatch = useDispatch();
  // action추가
  const { id, x, y, width, height, zIndex, image, angleDegree } = layer;
  // 이미지 좌표, 각도
  const [imgX, setImgX] = useState(x);
  const [imgY, setImgY] = useState(y);
  // 드래그 시작시, 이미지 좌표
  const [firstImgX, setFirstImgX] = useState(0);
  const [firstImgY, setFirstImgY] = useState(0);
  // 드래그 시작시, e.client 좌표
  const [firstEventClientX, setFirstEventClientX] = useState(0);
  const [firstEventClientY, setFirstEventClientY] = useState(0);
  const [
    transparentImage,
    setTransparentImage,
  ] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    img.onload = () => {
      setTransparentImage(img);
    };
  }, []);

  // 드래그 스타트 (기존의 이미지좌표와 e.client좌표 저장)
  const onDragStartImageHandler = useCallback(
    (e: React.DragEvent<HTMLImageElement>) => {
      transparentImage && e.dataTransfer.setDragImage(transparentImage, 0, 0);
      onClick(id, imgX, imgY, width, height, angleDegree, false);
      setFirstEventClientX(e.clientX);
      setFirstEventClientY(e.clientY);
      setFirstImgX(imgX);
      setFirstImgY(imgY);
    },
    [imgX, imgY, transparentImage],
  );

  // 드래그 도중 (기존의 이미지좌표의 e.client좌표와 현재 드래그 도중의 e.client좌표 차이만큼 이미지좌표에 더해서 저장)
  const onDragImageHandler = useCallback(
    (e: React.DragEvent<HTMLImageElement>) => {
      transparentImage && e.dataTransfer.setDragImage(transparentImage, 0, 0);
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

  // 드래그 종료 (mobX layers 상태변경)
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

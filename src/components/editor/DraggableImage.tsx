import React, { useCallback, useState } from "react";
import ImageLayer from "modules/layers/ImageLayer";
import { useDispatch } from "react-redux";
import { CHANGE_LAYER_LOCATION } from "store/layerReducer";

interface ComponentProps {
  layer: ImageLayer;
  onClick: Function;
}

const DraggableImage: React.FC<ComponentProps> = ({ layer, onClick }) => {
  const dispatch = useDispatch();
  // action추가
  const { id, x, y, width, height, zIndex, image } = layer;
  // 이미지 좌표
  const [imgX, setImgX] = useState(x);
  const [imgY, setImgY] = useState(y);
  // 드래그 시작시, 이미지 좌표
  const [firstImgX, setFirstImgX] = useState(0);
  const [firstImgY, setFirstImgY] = useState(0);
  // 드래그 시작시, e.client 좌표
  const [firstEventClientX, setFirstEventClientX] = useState(0);
  const [firstEventClientY, setFirstEventClientY] = useState(0);

  // 드래그 스타트 (기존의 이미지좌표와 e.client좌표 저장)
  const onDragStartImageHandler = useCallback(
    (e: React.DragEvent<HTMLImageElement>) => {
      onClick(imgX, imgY, width, height, false);
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

  return (
    <div
      draggable="true"
      onDrag={onDragImageHandler}
      onDragStart={onDragStartImageHandler}
      onDragOver={onDragOverImageHandler}
      onDragEnd={onDragEndImageHandler}
      onClick={(e) => {
        e.stopPropagation();
        onClick(imgX, imgY, width, height, true);
      }}
      style={{
        position: "fixed",
        width: width,
        height: height,
        left: imgX,
        top: imgY,
        zIndex: zIndex,
      }}
    >
      <img width={"100%"} height={"100%"} src={image.src} />
    </div>
  );
};

export default DraggableImage;

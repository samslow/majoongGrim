import React from "react";

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
  return (
    <img
      style={{
        position: "fixed",
        width: width,
        height: height,
        left: x,
        top: y,
        zIndex: zIndex,
      }}
      src={src}
    ></img>
  );
};

export default DraggableImage;

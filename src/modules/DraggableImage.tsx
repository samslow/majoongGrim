import React from "react";

interface ComponentProps {
  src: string;
  width: number;
  height: number;
}

const DraggableImage: React.FC<ComponentProps> = ({ src, width, height }) => {
  return <img style={{ width: width, height: height }} src={src}></img>;
};

export default DraggableImage;

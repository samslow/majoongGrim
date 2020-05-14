import React from "react";

interface ComponentProps {
  src: string;
}

const DraggableImage: React.FC<ComponentProps> = ({ src }) => {
  return <img src={src}></img>;
};

export default DraggableImage;

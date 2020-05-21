import React from "react";
import styled from "styled-components";

interface ShapeProps {
  shapeType: string;
}

interface ComponentProps {
  nowShape: string;
}

const ArtBoard: React.FC<ComponentProps> = ({ nowShape }) => {
  return <Container id="artboard" shapeType={nowShape} />;
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props: ShapeProps) => {
    return props.shapeType === "HORIZONTAL_SHAPE" ? "480px" : "280px";
  }};
  height: ${(props: ShapeProps) => {
    return props.shapeType === "HORIZONTAL_SHAPE" ? "280px" : "400px";
  }};
  background: white;
`;

export default ArtBoard;

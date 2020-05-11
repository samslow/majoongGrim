import React, { useEffect } from "react";
import styled from "styled-components";
import Layer from "modules/Layer";
import ImageLayer from "modules/ImageLayer";
import TextLayer from "modules/TextLayer";
import ShapeLayer from "modules/ShapeLayer";

const Container = styled.div`
  background: blue;
  flex: 3;
`;

const EditorContainer = () => {
  useEffect(() => {
    const img = <img />;
    console.log("레이어", new Layer(1, 1, 5, 5, 0, 1));
    console.log("이미지레이어", new ImageLayer(1, 1, 5, 5, 1, 1, new Image()));
    console.log(
      "텍스트레이어",
      new TextLayer(1, 1, 5, 5, 0, 1, "serif", 20, "blue"),
    );
    console.log(
      "도형레이어",
      new ShapeLayer(1, 1, 5, 5, 0, 1, "circle", "red"),
    );
  }, []);
  return <Container></Container>;
};

export default EditorContainer;

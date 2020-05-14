import React, { useEffect } from "react";
import styled from "styled-components";
import Layer from "modules/Layer";
import ImageLayer from "modules/ImageLayer";
import TextLayer from "modules/TextLayer";
import ShapeLayer from "modules/ShapeLayer";
import ArtBoard from "components/editor/ArtBoard";
import useStores from "hooks/useStores";
import { observer } from "mobx-react";
import DraggableImage from "modules/DraggableImage";

const Container = styled.div`
  position: relative;
  background: grey;
  flex: 3;
`;

const EditorContainer = observer(() => {
  const { HeaderStore, LayerStore } = useStores();

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
  return (
    <Container>
      {LayerStore.layers.length
        ? LayerStore.layers.map((item: any) => {
            return <DraggableImage src={item.image.src} />;
          })
        : null}
      <ArtBoard nowShape={HeaderStore.nowShape}></ArtBoard>
    </Container>
  );
});

export default EditorContainer;

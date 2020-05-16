import React, { useEffect } from "react";
import styled from "styled-components";
import Layer from "modules/layers/Layer";
import ImageLayer from "modules/layers/ImageLayer";
import TextLayer from "modules/layers/TextLayer";
import ShapeLayer from "modules/layers/ShapeLayer";
import ArtBoard from "components/editor/ArtBoard";
import useStores from "hooks/useStores";
import { observer } from "mobx-react";
import DraggableImage from "components/editor/DraggableImage";

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
        ? LayerStore.layers.map((layer: ImageLayer, i: number) => {
            console.log(layer);
            return <DraggableImage key={i} layer={layer} />;
          })
        : null}
      <ArtBoard nowShape={HeaderStore.nowShape} />
    </Container>
  );
});

export default EditorContainer;

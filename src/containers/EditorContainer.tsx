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

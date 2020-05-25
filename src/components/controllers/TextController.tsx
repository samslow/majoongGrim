import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import ContentsGroup from "components/controllers/ContentsGroup";
import InputContent from "components/controllers/InputContent";
import { RootState } from "store";
import TextLayer from "modules/layers/TextLayer";
import AdjustContent from "components/controllers/AdjustContent";
import { LayerActions } from "store/layerReducer";
import Theme from "modules/theme";

const TextController = () => {
  const dispatch = useDispatch();
  const selectedId = useSelector(
    (state: RootState) => state.layerReducer.selectedId,
  );
  const layers = useSelector((state: RootState) => state.layerReducer.layers);
  const targetLayer: TextLayer = layers[selectedId];

  const handleSize = (size: number) => {
    dispatch({
      type: LayerActions.ADJUST_FONTSIZE,
      id: selectedId,
      fontSize: size,
    });
  };

  const handleContent = (content: string) => {
    dispatch({
      type: LayerActions.ADJUST_FONTCONTENT,
      id: selectedId,
      content: content,
    });
  };

  const handleFontFamily = (fontFamily: string) => {
    dispatch({
      type: LayerActions.ADJUST_FONTFAMILY,
      id: selectedId,
      fontFamily: fontFamily,
    });
  };

  return (
    <Container>
      <ContentsGroup subject={"Content"}>
        <InputContent
          fontSize={targetLayer.fontSize}
          input={targetLayer.content}
          fonts={["나눔바른고딕", "조선궁서체", "TT투게더"]}
          nowFontFamily={targetLayer.fontFamily}
          onChangeSize={handleSize}
          onChangeContent={handleContent}
          onChangeFontFamily={handleFontFamily}
        />
      </ContentsGroup>
      <ContentsGroup subject={"Adjust"}>
        <AdjustContent rotation />
      </ContentsGroup>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${Theme.lightDark};
  border: 1px solid ${Theme.border};
  padding: 0 1em;
  flex: 1;
  display: flex;
`;

export default TextController;

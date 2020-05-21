import React from "react";
import styled from "styled-components";
import {
  MdFormatItalic,
  MdFormatBold,
  MdFormatUnderlined,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import ButtonContent from "components/controllers/ButtonContent";
import ContentsGroup from "components/controllers/ContentsGroup";
import InputContent from "components/controllers/InputContent";
import { RootState } from "store";
import TextLayer from "modules/layers/TextLayer";
import {
  ADJUST_FONTTYPE,
  ADJUST_FONTSIZE,
  ADJUST_FONTCONTENT,
} from "store/layerReducer";

const TextController = () => {
  const dispatch = useDispatch();
  const selectedId = useSelector(
    (state: RootState) => state.layerReducer.selectedId,
  );
  const layers = useSelector((state: RootState) => state.layerReducer.layers);
  const targetLayer: TextLayer = layers[selectedId];

  const handleStyle = (style: string) => {
    dispatch({
      type: ADJUST_FONTTYPE,
      id: selectedId,
      fontType: style,
    });
  };

  const handleSize = (size: number) => {
    dispatch({
      type: ADJUST_FONTSIZE,
      id: selectedId,
      fontSize: size,
    });
  };

  const handleContent = (content: string) => {
    dispatch({
      type: ADJUST_FONTCONTENT,
      id: selectedId,
      content: content,
    });
  };

  return (
    <Container>
      <ContentsGroup subject={"Style"}>
        <ButtonContent
          icon={<MdFormatBold size={"100%"} style={{ height: "100%" }} />}
          label={"Bold"}
          onClick={handleStyle}
        />
        <ButtonContent
          icon={<MdFormatItalic size={"100%"} style={{ height: "95%" }} />}
          label={"Italic"}
          onClick={handleStyle}
        />
        <ButtonContent
          icon={<MdFormatUnderlined size={"100%"} style={{ height: "85%" }} />}
          label={"Underline"}
          onClick={handleStyle}
        />
      </ContentsGroup>
      <Devider />
      <ContentsGroup subject={"Content"}>
        <InputContent
          fontSize={targetLayer.fontSize}
          input={targetLayer.content}
          fonts={["Option 1", "Option 2", "Option 3"]}
          onChangeSize={handleSize}
          onChangeContent={handleContent}
        />
      </ContentsGroup>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1em;
  background-color: #fff;
  flex: 1;
  display: flex;
`;

const Devider = styled.hr`
  width: 2px;
  height: 50%;
  background-color: #8884;
  margin: auto 0;
  border: 0;
`;

export default TextController;

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  AiOutlineItalic,
  AiOutlineBold,
  AiOutlineUnderline,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import ButtonContent from "components/controllers/ButtonContent";
import { LayerActions } from "store/layerReducer";
import { RootState } from "store";
import Theme from "modules/theme";

interface ComponentProps {
  input: string;
  fontSize: number;
  fonts: string[];
  nowFontFamily: string;
  onChangeSize: Function;
  onChangeContent: Function;
  onChangeFontFamily: Function;
}

const InputContent: React.FC<ComponentProps> = ({
  input,
  fontSize,
  fonts,
  nowFontFamily,
  onChangeSize,
  onChangeContent,
  onChangeFontFamily,
}) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState(fontSize);
  const [text, setContent] = useState(input);
  const [fontFamily, setFontFamily] = useState(nowFontFamily);

  useEffect(() => {
    setSize(fontSize);
    setContent(input);
    setFontFamily(nowFontFamily);
  }, [fontSize, input, nowFontFamily]);

  const selectedId = useSelector(
    (state: RootState) => state.layerReducer.selectedId,
  );
  const Options = () => {
    const fontList = fonts.map((item, index) => {
      return (
        <Option key={index} value={item} selected={fontFamily === item}>
          {item}
        </Option>
      );
    });

    return <>{fontList}</>;
  };

  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value) ? parseInt(e.target.value) : 5;
    setSize(size);
    onChangeSize(size);
  };

  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    onChangeContent(e.target.value);
  };

  const handleFontFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
    onChangeFontFamily(e.target.value);
  };
  const handleStyle = (style: string) => {
    dispatch({
      type: LayerActions.ADJUST_FONTTYPE,
      id: selectedId,
      fontType: style,
    });
  };

  return (
    <Container>
      <InputBox>
        <Label>Size</Label>
        <InputText type={"number"} value={size} onChange={handleSize} min={5} />
      </InputBox>
      <InputBox>
        <Label>Text</Label>
        <InputText value={text} onChange={handleContent} />
      </InputBox>
      <InputBox>
        <Label>Font</Label>
        <InputSelect onChange={handleFontFamily}>
          <Options />
        </InputSelect>
      </InputBox>
      <InputBox>
        <Label>Style</Label>
        <ButtonBox>
          <ButtonContent
            icon={<AiOutlineBold color={"white"} />}
            label={"Bold"}
            onClick={handleStyle}
          />
          <ButtonContent
            icon={<AiOutlineItalic color={"white"} />}
            label={"Italic"}
            onClick={handleStyle}
          />
          <ButtonContent
            icon={<AiOutlineUnderline color={"white"} />}
            label={"Underline"}
            onClick={handleStyle}
          />
        </ButtonBox>
      </InputBox>
    </Container>
  );
};
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 7px 0;
  height: 20px;
`;

const ButtonBox = styled.div`
  width: 52%;
`;

const InputText = styled.input`
  width: 50%;
  padding: 3px;
  background-color: ${Theme.dark};
  color: #fff;
  border: 1px solid ${Theme.border};
  font-size: 12px;
`;

const InputSelect = styled.select`
  width: 52%;
  background-color: ${Theme.dark};
  color: #fff;
`;

const Option = styled.option``;

const Label = styled.label`
  color: #888;
`;

export default InputContent;

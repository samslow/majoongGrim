import React, { useState } from "react";
import styled from "styled-components";

interface ComponentProps {
  input: string;
  fontSize: number;
  fonts: string[];
  onChangeSize: Function;
  onChangeContent: Function;
}

const InputContent: React.FC<ComponentProps> = ({
  input,
  fontSize,
  fonts,
  onChangeSize,
  onChangeContent,
}) => {
  const [size, setSize] = useState(fontSize);
  const [text, setContent] = useState(input);

  const Options = () => {
    const fontList = fonts.map((item, index) => {
      return (
        <Option key={index} value={item}>
          {item}
        </Option>
      );
    });

    return <>{fontList}</>;
  };

  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value);
    setSize(size);
    onChangeSize(size);
  };

  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    onChangeContent(e.target.value);
  };

  return (
    <Container>
      <InputBox>
        <Label>Size</Label>
        <InputText type={"number"} value={size} onChange={handleSize} />
      </InputBox>
      <InputBox>
        <Label>Text</Label>
        <InputText value={text} onChange={handleContent} />
      </InputBox>
      <InputBox>
        <Label>Font</Label>
        <InputSelect>
          <Options />
        </InputSelect>
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
  align-items: flex-start;
  margin: 5px 0;
`;

const InputText = styled.input`
  width: 50%;
`;

const InputSelect = styled.select`
  width: 50%;
`;

const Option = styled.option``;

const Label = styled.label`
  color: #888;
`;

export default InputContent;

import React, { useState } from "react";
import styled from "styled-components";

interface ComponentProps {
  input: string;
  fontSize: number;
  fonts: string[];
}

const InputContent: React.FC<ComponentProps> = ({ input, fontSize, fonts }) => {
  const [size, setSize] = useState(fontSize);
  const [text, setContent] = useState(input);
  const [items, _] = useState(fonts);

  const Options = () => {
    const fontList = items.map((item, index) => {
      return (
        <Option key={index} value={item}>
          {item}
        </Option>
      );
    });
    console.log("fontList", fontList);

    return <>{fontList}</>;
  };

  return (
    <Container>
      <InputBox>
        <Label>Size</Label>
        <InputText
          type={"number"}
          value={size}
          onChange={(event) => setSize(parseInt(event.target.value))}
        />
      </InputBox>
      <InputBox>
        <Label>Text</Label>
        <InputText
          value={text}
          onChange={(event) => setContent(event.target.value)}
        />
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

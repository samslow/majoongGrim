import React from "react";
import styled from "styled-components";

interface ComponentProps {
  type: string;
  value: number;
}

const InputText: React.FC<ComponentProps> = ({ type, value }) => {
  return (
    <InputTextContainer>
      <Label>{type}:</Label>
      <SizeInput type={"number"} value={value} />
      <span>px</span>
    </InputTextContainer>
  );
};

const InputTextContainer = styled.div`
  display: inline-block;
`;
const Label = styled.label`
  padding-right: 5px;
`;
const SizeInput = styled.input`
  width: 30%;
`;

export default InputText;

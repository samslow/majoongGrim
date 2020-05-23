import React from "react";
import styled from "styled-components";

interface ComponentProps {
  type: string;
  value: number;
}

const InputText: React.FC<ComponentProps> = ({ type, value }) => {
  return (
    <InputTextContainer>
      <Label>{type}</Label>
      <SizeInput type={"number"} value={value} />
    </InputTextContainer>
  );
};

const InputTextContainer = styled.div`
  width: 50%;
  display: inline-block;
`;
const Label = styled.label`
  width: 30%;
  padding-right: 5px;
`;
const SizeInput = styled.input`
  width: 60%;
`;

export default InputText;

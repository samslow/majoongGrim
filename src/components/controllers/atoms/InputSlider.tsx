import React, { useState } from "react";
import styled from "styled-components";

interface ComponentProps {
  angle: number;
  onChange: (angle: number) => void;
}

const InputSlider: React.FC<ComponentProps> = ({ angle, onChange }) => {
  const [value, setValue] = useState(angle);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const angle = parseInt(e.target.value);
    onChange(angle);
    setValue(angle);
  };
  return (
    <Container>
      <Slider type={"range"} value={value} onChange={(e) => handleChange(e)} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Slider = styled.input`
  width: 90%;
`;

export default InputSlider;

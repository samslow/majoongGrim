import React from "react";
import styled from "styled-components";

interface ComponentProps {
  value: number;
  onChange: Function;
}

const SizeSlider: React.FC<ComponentProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    onChange(val);
  };
  return (
    <Container>
      <Slider
        type={"range"}
        value={value}
        onChange={(e) => handleChange(e)}
        max={480}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Slider = styled.input`
  width: 90%;
`;

export default SizeSlider;

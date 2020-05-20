import React, { useState } from "react";
import styled from "styled-components";

const SizeSlider = () => {
  const [size, setSize] = useState(50);

  return (
    <SliderContainer>
      <input
        name="textSlider"
        type="range"
        min="1"
        max="100"
        value={size}
        style={{ width: "100%" }}
        onChange={(e) => setSize(parseInt(e.target.value))}
      />
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 90%;
`;

export default SizeSlider;

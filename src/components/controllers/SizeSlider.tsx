import React from "react";
import styled from "styled-components";

const SizeSlider = () => {
  return (
    <SliderContainer>
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        style={{ width: "100%" }}
      />
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 90%;
`;

export default SizeSlider;

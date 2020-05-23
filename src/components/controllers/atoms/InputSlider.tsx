import React from "react";
import styled from "styled-components";

const InputSlider = () => {
  return (
    <Container>
      <Slider type={"range"} />
    </Container>
  );
};

const Container = styled.div`
  /* width: 100%; */
`;

const Slider = styled.input`
  width: 90%;
`;

export default InputSlider;

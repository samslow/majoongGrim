import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import InputText from "components/controllers/atoms/InputText";
import Slider from "components/controllers/atoms/InputSlider";
import { RootState } from "store";
import Layer from "modules/layers/Layer";
import { ADJUST_ANGLE } from "store/layerReducer";

const AdjustContent = () => {
  const dispatch = useDispatch();
  const selectedId = useSelector(
    (state: RootState) => state.layerReducer.selectedId,
  );
  const layers = useSelector((state: RootState) => state.layerReducer.layers);
  const layer: Layer = layers[selectedId];

  const handleAngle = (angle: number) => {
    dispatch({
      type: ADJUST_ANGLE,
      id: selectedId,
      angle: angle,
    });
  };

  return (
    <Container>
      <AdjustBox>
        <Label>Size</Label>
        <ContentBox>
          {/* <InputText type={"w"} value={layer.width} />
          <InputText type={"h"} value={layer.height} /> */}
        </ContentBox>
      </AdjustBox>
      <AdjustBox>
        <Label>Rotation</Label>
        <ContentBox>
          <Slider angle={layer.angleDegree} onChange={handleAngle} />
        </ContentBox>
      </AdjustBox>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AdjustBox = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  height: 20px;
`;

const Label = styled.label`
  width: 30%;
  text-align: center;
`;

const ContentBox = styled.div`
  width: 70%;
  display: inline-block;
`;

export default AdjustContent;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import SizeSlider from "components/controllers/atoms/SizeSlider";
import AngleSlider from "components/controllers/atoms/AngleSlider";
import { RootState } from "store";
import Layer from "modules/layers/Layer";
import { ADJUST_ANGLE, ADJUST_SIZE } from "store/layerReducer";

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
  const handleSize = (size: number) => {
    dispatch({
      type: ADJUST_SIZE,
      id: selectedId,
      size: size,
    });
  };

  return (
    <Container>
      <AdjustBox>
        <Label>Size</Label>
        <ContentBox>
          <SizeSlider value={layer.width} onChange={handleSize} />
        </ContentBox>
      </AdjustBox>
      <AdjustBox>
        <Label>Rotation</Label>
        <ContentBox>
          <AngleSlider value={layer.angleDegree} onChange={handleAngle} />
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

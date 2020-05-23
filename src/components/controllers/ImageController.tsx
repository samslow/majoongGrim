import React from "react";
import styled from "styled-components";

import ContentsGroup from "components/controllers/ContentsGroup";
import AdjustContent from "components/controllers/AdjustContent";

const ImageController = () => {
  return (
    <Container>
      <ContentsGroup subject={"Adjust"}>
        <AdjustContent />
      </ContentsGroup>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
`;

export default ImageController;

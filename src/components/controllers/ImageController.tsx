import React from "react";
import styled from "styled-components";

import ContentsGroup from "components/controllers/ContentsGroup";
import AdjustContent from "components/controllers/AdjustContent";
import Theme from "modules/theme";

const ImageController = () => {
  return (
    <Container>
      <ContentsGroup subject={"Adjust"}>
        <AdjustContent size rotation />
      </ContentsGroup>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${Theme.lightDark};
  border: 1px solid ${Theme.border};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
`;

export default ImageController;

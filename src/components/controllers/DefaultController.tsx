import React from "react";
import styled from "styled-components";
import Theme from "modules/theme";

const DefaultController = () => {
  return <Container>Select tool from top right corner</Container>;
};

const Container = styled.div`
  background-color: ${Theme.lightDark};
  border: 1px solid ${Theme.border};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.caption};
`;

export default DefaultController;

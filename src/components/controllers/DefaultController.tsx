import React from "react";
import styled from "styled-components";

const DefaultController = () => {
  return <Container>Select tool from top right corner</Container>;
};

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
`;

export default DefaultController;

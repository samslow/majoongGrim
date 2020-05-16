import React from "react";
import styled from "styled-components";

const DefaultController = () => {
  return <Container>툴을 선택하세요</Container>;
};

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DefaultController;

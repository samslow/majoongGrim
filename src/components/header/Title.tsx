import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  padding: 0px 30px 0px 30px;
`;

const Title = ({ appTitleText }: { appTitleText: string }) => {
  return <Container>{appTitleText}</Container>;
};

export default Title;

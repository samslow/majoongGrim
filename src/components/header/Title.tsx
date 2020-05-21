import React from "react";
import styled from "styled-components";

interface ComponentProps {
  appTitleText: string;
}

const Title: React.FC<ComponentProps> = ({ appTitleText }) => {
  return <Container>{appTitleText}</Container>;
};

const Container = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 0px 30px 0px 30px;
`;

export default Title;

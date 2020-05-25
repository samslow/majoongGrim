import React, { ReactNode } from "react";
import styled from "styled-components";

interface ComponentProps {
  children: ReactNode;
  subject: string;
}

const ContentsGroup: React.FC<ComponentProps> = ({ children, subject }) => {
  return (
    <ContentsGroupContainer>
      <ContentsRow>{children}</ContentsRow>
      <ContentsLabel>{subject}</ContentsLabel>
    </ContentsGroupContainer>
  );
};

const ContentsGroupContainer = styled.section`
  margin: auto 0;
  padding: 0 1em;
  flex: 1;
`;

const ContentsRow = styled.div`
  height: 150px;
  align-items: center;
`;

const ContentsLabel = styled.div`
  display: flex;
  justify-content: center;
  color: #888;
`;

export default ContentsGroup;

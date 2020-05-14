import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import useStores from "hooks/useStores";

const insertImage: React.FC = observer(() => {
  return <Container>텍스트 삽입</Container>;
});

const Container = styled.div`
  background-color: #fff;
  flex: 1;
`;

export default insertImage;

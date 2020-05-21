import React from "react";
import styled from "styled-components";
import {
  MdFormatItalic,
  MdFormatBold,
  MdFormatUnderlined,
} from "react-icons/md";

import ButtonContent from "components/controllers/ButtonContent";
import ListContent from "components/controllers/ListContent";
import ContentsGroup from "components/controllers/ContentsGroup";
import InputContent from "components/controllers/InputContent";

const insertImage: React.FC = () => {
  return (
    <Container>
      <ContentsGroup subject={"Style"}>
        <ButtonContent
          icon={<MdFormatBold size={"100%"} style={{ height: "100%" }} />}
          label={"Bold"}
        />
        <ButtonContent
          icon={<MdFormatItalic size={"100%"} style={{ height: "95%" }} />}
          label={"Italic"}
        />
        <ButtonContent
          icon={<MdFormatUnderlined size={"100%"} style={{ height: "85%" }} />}
          label={"Underline"}
        />
      </ContentsGroup>
      <Devider />
      <ContentsGroup subject={"Content"}>
        <InputContent
          input={"Hello"}
          fontSize={12}
          fonts={["Option1", "Option2", "Option3"]}
        />
      </ContentsGroup>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1em;
  background-color: #fff;
  flex: 1;
  display: flex;
`;

const Devider = styled.hr`
  width: 2px;
  height: 50%;
  background-color: #8884;
  margin: auto 0;
  border: 0;
`;

export default insertImage;

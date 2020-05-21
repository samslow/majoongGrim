import React from "react";
import styled from "styled-components";
import {
  MdFormatItalic,
  MdFormatBold,
  MdFormatUnderlined,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
} from "react-icons/md";

import ButtonContent from "components/controllers/ButtonContent";
import ListContent from "components/controllers/ListContent";
import ContentsGroup from "components/controllers/ContentsGroup";
import SizeSlider from "components/controllers/SizeSlider";

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
      <ContentsGroup subject={"Align"}>
        <ButtonContent
          icon={<MdFormatAlignLeft size={"90%"} />}
          label={"Left"}
        />
        <ButtonContent
          icon={<MdFormatAlignCenter size={"90%"} />}
          label={"Center"}
        />
        <ButtonContent
          icon={<MdFormatAlignRight size={"90%"} />}
          label={"Right"}
        />
      </ContentsGroup>
      <Devider />
      <ContentsGroup subject={"Size"}>
        <SizeSlider />
      </ContentsGroup>
      <Devider />
      <ContentsGroup subject={"Font"}>
        <ListContent items={["Option1", "Option2", "Option3"]} />
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

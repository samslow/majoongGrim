import React from "react";
import styled from "styled-components";

interface ComponentProps {
  items: string[];
}

const ListContent: React.FC<ComponentProps> = ({ items }) => {
  const Fonts: React.FC = () => {
    return (
      <>
        {items.map((item, index) => {
          return <ListItem key={index}>{item}</ListItem>;
        })}
      </>
    );
  };

  return (
    <ListContainer>
      <Fonts />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ListItem = styled.button`
  width: 100%;
  margin: 5px 0;
`;

export default ListContent;

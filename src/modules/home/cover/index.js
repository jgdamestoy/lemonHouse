import React from "react";
import styled from "styled-components";

import { fontSize, breakPoints } from "config/theme";
import Background from "./Background";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  padding: 3vh 5vw;
  text-transform: uppercase
  font-size: ${fontSize.mainTitle.mobile};
  font-weight: bold;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.mainTitle.std};
  }
`;
const Description = styled.div`
  padding: 0vw 5vw;
  font-size: ${fontSize.title.mobile};
  line-height: 25px;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.title.std};
  }
`;

const Cover = () => {
  return (
    <Container>
      <Background />
      <Content>
        <Title>Lemon house samui</Title>
        <Description>A tiny hotel in Thaïland</Description>
      </Content>
    </Container>
  );
};

export default Cover;

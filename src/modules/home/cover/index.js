import React from "react";
import styled from "styled-components";

import Background from "./Background";
import Content from "./Content";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Cover = () => {
  return (
    <Container>
      <Content />
    </Container>
  );
};

export default Cover;

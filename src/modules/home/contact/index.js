import React, { Component } from "react";
import styled from "styled-components";

import { colors, fontSize, breakPoints } from "config/theme";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const Container = styled.div`
  padding: 15vh 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.lemonWhite};
  @media (min-width: ${breakPoints.std}) {
    padding: 5vw;
  }
`;
const Title = styled.div`
  color: ${colors.lemonGreen};
  padding: 0 1vw;
  border-radius: 5px;
  font-size: ${fontSize.title.mobile};
  font-weight: bold;
  margin-bottom: 3vh;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.title.std};
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakPoints.std}) {
    flex-direction: row;
  }
`;

class Contact extends Component {
  render() {
    return (
      <Container>
        <Title> Contact & Location</Title>
        <Content>
          <LeftContent />

          <RightContent />
        </Content>
      </Container>
    );
  }
}

export default Contact;

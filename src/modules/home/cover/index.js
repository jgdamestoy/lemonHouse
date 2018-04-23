import React from "react";
import styled from "styled-components";
import { injectIntl, defineMessages } from "react-intl";

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
  padding: 0vw 5vw;
  font-family: avenir-black;
  text-transform: uppercase
  font-size: 40px;
  font-weight: 600;
  @media (min-width: 800px) {
    font-size: 65px;
  }
`;
const Description = styled.div`
  padding: 0vw 5vw;
  font-size: 30px;
  line-height: 25px;
  @media (min-width: 800px) {
    font-size: 50px;
  }
`;

const messages = defineMessages({
  title: {
    id: "Cover.title",
    defaultMessage: "Lemon house samui"
  },
  description: {
    id: "Cover.description",
    defaultMessage:
      "A tiny hotel in Thaïland"
  },
});

const Cover = ({ intl }) => {
  return (
    <Container>
      <Background />
      <Content>
        <Title>
          {intl.formatMessage(messages.title)}
        </Title>
        <Description>{intl.formatMessage(messages.description)}</Description>
      </Content>
    </Container>
  );
};

export default injectIntl(Cover);

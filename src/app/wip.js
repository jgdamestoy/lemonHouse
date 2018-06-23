import React from "react";
import styled from "styled-components";
import { defineMessages, injectIntl } from "react-intl";

import { config as CONFIG } from "config/";
import { colors, fontSize, breakPoints } from "config/theme";

const messages = defineMessages({
  title: {
    id: "wip.title",
    defaultMessage: "Comming soon"
  },
  description: {
    id: "wip.description",
    defaultMessage:
      "This page is going to be available soon"
  }
});

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 0vw 10vw;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  padding: 5vh 3vw;
  border-radius: 25px;
`;
const DescriptionPart = styled.div`
  font-size: ${fontSize.description.mobile};
  tex-aling: center;
  padding-bottom: 1vh;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.description.std};
  }
`;

const propTypes = {};
const defaultProps = {};

const NoMatch = ({ intl }) => {
  return (
    <Container>
      <MessageBox>
        <DescriptionPart>{intl.formatMessage(messages.title)}</DescriptionPart>
        <DescriptionPart>{intl.formatMessage(messages.description)}</DescriptionPart>
      </MessageBox>
    </Container>
  );
};

NoMatch.propTypes = propTypes;
NoMatch.defaultProps = defaultProps;

export default injectIntl(NoMatch);

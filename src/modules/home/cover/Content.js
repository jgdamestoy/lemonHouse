import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl, defineMessages } from "react-intl";

import { fontSize, breakPoints } from "config/theme";
import StdButton from "components/StdButton";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5vw;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 1s ease;
`;
const Title = styled.div`
  padding-bottom: 3vh;
  text-transform: uppercase
  font-size: ${fontSize.mainTitle.mobile};
  font-weight: bold;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.mainTitle.std};
  }
`;
const Description = styled.div`
  padding-bottom: 5vh;
  font-size: ${fontSize.title.mobile};
  line-height: 25px;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.title.std};
  }
`;
const ButtonBox = styled.div`
  width: 50vw;
`;

class Content extends Component {
  render() {
    const { intl } = this.props;
    const messages = defineMessages({
      rooms: {
        id: "homeCover.rooms",
        defaultMessage: "See the rooms"
      }
    });

    return (
      <Container className="animated fadeInLeft">
        <Title>Lemon house samui</Title>
        <Description>A tiny hotel in Thaïland</Description>
        <ButtonBox>
          <StdButton
            to="/allrooms"
            label={intl.formatMessage(messages.rooms)}
          />
        </ButtonBox>
      </Container>
    );
  }
}

export default injectIntl(Content);

import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl, defineMessages } from "react-intl";

import { config as CONFIG } from "config/";
import { colors, breakPoints, fontSize, assets } from "config/theme";
import BookingButton from "components/BookingButton";

const Container = styled.div`
  width: 80vw;
  font-size: ${fontSize.description.mobile}
  font-weight: 700;
  padding-top: 5vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.description.std};
  }
`;
const Text = styled.div`
  background-color: ${colors.backgroundTextBlock};
  border-radius: 20px;
  padding: 2vh;
  margin-bottom: 2vh;
`;
const ImgFooter = styled.img`
  width: 70vw;
`;

class Footer extends Component {
  render() {
    const { intl } = this.props;
    const messages = defineMessages({
      title: {
        id: "aboutFooter.title",
        defaultMessage:
          "We speak French and English and will be happy to meet you.<br /> Stephanie and Jean."
      },
      book: {
        id: "aboutFooter.book",
        defaultMessage: "Book now"
      }
    });

    return (
      <Container>
        <Text>{intl.formatMessage(messages.title)}</Text>

        <ImgFooter src={assets.imgFooterAboutUrl} />

        <BookingButton
          label={intl.formatMessage(messages.book)}
          to={CONFIG.BOOKING_ADRESS}
        />
      </Container>
    );
  }
}

export default injectIntl(Footer);

import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl, defineMessages } from "react-intl";

import { colors, breakPoints, fontSize } from "config/theme";
import { config as CONFIG } from "config/";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Button = styled.a`
  cursor: pointer;
  margin-top: 10vh;
  width: 60vw;
  text-decoration: none;
  text-align: center;
  font-size: ${fontSize.subtitle.mobile}
  font-weight: bold;
  padding: 5px 10px;
  color: ${colors.lemonYellow};
  border-radius: 5px;
  background-color: ${colors.lemonGreen};
  border: 2px solid transparent;
  &:hover {
    color: ${colors.lemonYellow};
    border: 2px solid ${colors.lemonYellow};
  };
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.subtitle.std};
  }
`;

class Booking extends Component {
  render() {
    const { intl } = this.props;
    const messages = defineMessages({
      emailBooking: {
        id: "booking.bookingEmail",
        defaultMessage: "Book by email"
      },
      bookingWebsite: {
        id: "booking.bookingWebsite",
        defaultMessage: "Book through booking.com"
      },
      clientName: {
        id: "booking.clientName",
        defaultMessage: "Client name"
      },
      phoneNumber: {
        id: "booking.phoneNumber",
        defaultMessage: "Phone number"
      },
      email: {
        id: "booking.email",
        defaultMessage: "Contact email (if different from this one)"
      },
      room: {
        id: "booking.room",
        defaultMessage: "Rooms type wished (number)"
      },
      standart: {
        id: "booking.standart",
        defaultMessage: "Standart room twin"
      },
      suite: {
        id: "booking.suite",
        defaultMessage: "Suite with kichenette"
      },
      sup: {
        id: "booking.sup",
        defaultMessage: "Superior double bed room"
      },
      rooftop: {
        id: "booking.rooftop",
        defaultMessage: "Loft rooftop with jacuzzi"
      },
      arrivalDate: {
        id: "booking.arrivalDate",
        defaultMessage: "Arrival date"
      },
      arrivalHour: {
        id: "booking.arrivalHour",
        defaultMessage: "Arrival hour"
      },
      departureDate: {
        id: "booking.departureDate",
        defaultMessage: "Arrival hour"
      },
      breakfast: {
        id: "booking.breakfast",
        defaultMessage: "With breakfast:    YES - NO"
      },
      motobike: {
        id: "booking.motobike",
        defaultMessage: "Motobike rent:     YES - NO"
      },
      car: {
        id: "booking.car",
        defaultMessage: "Car rent:              YES - NO"
      },
      comment: {
        id: "booking.comment",
        defaultMessage: "Comment, special whishes"
      },
      subject: {
        id: "booking.subject",
        defaultMessage: "Booking request"
      },
    });

    const sendMail = () => {
        var body = intl.formatMessage(messages.clientName) + ":\n"
         + intl.formatMessage(messages.phoneNumber) + ":\n"
         + intl.formatMessage(messages.email) + ":\n"
         + intl.formatMessage(messages.room) + ":\n\n"
         + intl.formatMessage(messages.room) + ":\n\n"
         + intl.formatMessage(messages.standart) + ":\n"
         + intl.formatMessage(messages.suite) + ":\n"
         + intl.formatMessage(messages.sup) + ":\n"
         + intl.formatMessage(messages.rooftop) + ":\n\n"
         + intl.formatMessage(messages.arrivalDate) + ":\n"
         + intl.formatMessage(messages.arrivalHour) + ":\n\n"
         + intl.formatMessage(messages.departureDate) + ":\n\n"
         + intl.formatMessage(messages.breakfast) + "\n\n"
         + intl.formatMessage(messages.motobike) + "\n"
         + intl.formatMessage(messages.car) + "\n\n"
         + intl.formatMessage(messages.comment) + ":\n\n"

        body = encodeURIComponent(body) 

        const link = "mailto:" + CONFIG.BOOKING_EMAIL_ADRESS
                 + "?subject=" + intl.formatMessage(messages.subject)
                 + "&body=" + body
        ;
        window.location.href = link;
    }

    return (
      <Container>
        <Button onClick={sendMail}>
          {intl.formatMessage(messages.emailBooking)}
        </Button>

        <Button target="_blank" href={CONFIG.BOOKING_ADRESS}>
          {intl.formatMessage(messages.bookingWebsite)}
        </Button>

      </Container>
    );
  }
}

export default injectIntl(Booking);

import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl, defineMessages } from "react-intl";

import { colors, fontSize, breakPoints } from "config/theme";

const Container = styled.div`
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

class Description extends Component {
  render() {
    const { intl } = this.props;
    const messages = defineMessages({
      description1: {
        id: "allRooms.description1",
        defaultMessage:
          "All rooms have free access to the pool with self-service beach towels."
      },
      description2: {
        id: "allRooms.description2",
        defaultMessage: "The wifi is free and available throughout the hotel."
      },
      description3: {
        id: "allRooms.description3",
        defaultMessage:
          "Shower gel and soap available in each bathroom, and 2 bottles of water a day."
      },
      description4: {
        id: "allRooms.description4",
        defaultMessage: "Hair dryer available on request at the bar."
      },
      description5: {
        id: "allRooms.description5",
        defaultMessage:
          "Some rooms can accommodate one to two extra beds which are charged THB 200 each per day (or breakfast) to be paid directly to the hotel upon check-in."
      },
      description6: {
        id: "allRooms.description6",
        defaultMessage:
          "Breakfast is priced at 250 THB per person per day and includes: Hot drink at will, A fruit juice (orange, guava or pineapple), A french toast baked, A mini chocolate bread, A mini croissant, Butter, Jam, 2 eggs, fried, or omelette, Bacon, 1 plate of fresh fruit of the day."
      }
    });

    return (
      <Container>
        <DescriptionPart>
          {intl.formatMessage(messages.description1)}
        </DescriptionPart>
        <DescriptionPart>
          {intl.formatMessage(messages.description2)}
        </DescriptionPart>
        <DescriptionPart>
          {intl.formatMessage(messages.description3)}
        </DescriptionPart>
        <DescriptionPart>
          {intl.formatMessage(messages.description4)}
        </DescriptionPart>
        <DescriptionPart>
          {intl.formatMessage(messages.description5)}
        </DescriptionPart>
        <DescriptionPart>
          {intl.formatMessage(messages.description6)}
        </DescriptionPart>
      </Container>
    );
  }
}

export default injectIntl(Description);

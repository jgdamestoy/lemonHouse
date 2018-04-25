import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "config/theme";
import { data } from "modules/roomsData";
import { Link } from "react-router-dom";

import Room from "./Room";
import BookingButton from "components/BookingButton";

const Container = styled.div`
  padding: 5vw 10vw;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.lemonGreen};
  padding: 3vh 15vh;
  background-color: rgba(243, 227, 49, 0.3);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const propTypes = {};
const defaultProps = {};

class AllRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Title>Nos Chambres</Title>

        {data.map((item, index) => <Room room={item} />)}

        <BookingButton
          to="https://www.booking.com/index.fr.html"
          label="Book now"
        />
      </Container>
    );
  }
}

AllRooms.propTypes = propTypes;
AllRooms.defaultProps = defaultProps;

export default AllRooms;

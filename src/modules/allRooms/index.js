import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "config/theme";
import {data} from "modules/roomsData";
import { Link } from "react-router-dom";

import Room from "./Room";

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
const BookingButton = styled.a`
  margin-top: 10vh;
  width: 60vw;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  background-color: ${colors.lemonGreen};
  border: 2px solid transparent;
  &:hover {
    color: ${colors.lemonYellow};
    border: 2px solid ${colors.lemonYellow};
  };
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
        
        {data.map((item, index) => <Room room={item} /> )}
        
        <BookingButton 
          target="_blank"
          href="https://www.booking.com/index.fr.html"
        >
          Book Now
        </BookingButton>
      </Container>
    );
  }
}

AllRooms.propTypes = propTypes;
AllRooms.defaultProps = defaultProps;

export default AllRooms;

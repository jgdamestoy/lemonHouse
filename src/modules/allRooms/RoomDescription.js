import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {colors, fontSize} from "config/theme";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Type = styled.div`
  color: ${colors.lemonGreen};
  font-size: ${fontSize.subtitle};
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 10vh;
`;
const RoomButton = styled.div`
  padding: 5px 10px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  background-color: ${colors.lemonGreen};
  border: 2px solid transparent;
  &:hover {
    color: ${colors.lemonYellow};
    border: 2px solid ${colors.lemonYellow};
  };
`;
const StyledLink = styled(Link)`
  text-decoration: none ;
`;

const propTypes = {
  type: PropTypes.string,
  description: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.number,
};
const defaultProps = {};

class RoomDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {type, description, number, id} = this.props;
    
    return (
      <Container>
        <Type>{type}</Type>
        
        <StyledLink to={`/room/${id}`}>
          <RoomButton>See the room</RoomButton>
        </StyledLink>
      </Container>
    );
  }
}

RoomDescription.propTypes = propTypes;
RoomDescription.defaultProps = defaultProps;

export default RoomDescription;

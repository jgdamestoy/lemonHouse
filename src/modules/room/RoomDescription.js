import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {colors, fontSize} from "config/theme";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Type = styled.div`
  color: ${colors.lemonGreen};
  font-size: ${fontSize.subtitle};
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 3vh;
`;
const Description = styled.div`
  color: ${colors.lemonWhite};
  font-size: ${fontSize.description};
  padding-bottom: 5vh;
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
        
        <Description>{description}</Description>
      </Container>
    );
  }
}

RoomDescription.propTypes = propTypes;
RoomDescription.defaultProps = defaultProps;

export default RoomDescription;

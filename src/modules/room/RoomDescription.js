import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {colors, fontSize} from "config/theme";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 10vw;
  width: 80vw;
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
const NumberBox = styled.div`
  color: ${colors.lemonGreen};
  font-size: ${fontSize.description};
  padding-bottom: 10vh;
`;
const Button = styled.div`
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  background-color: rgba(243, 227, 49, 0.8);
  border: 2px solid transparent;
  &:hover {
    color: ${colors.lemonGreen};
    border: 2px solid ${colors.lemonGreen};
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
        
        <Description>{description}</Description>
        
        <NumberBox>{number}</NumberBox> 
        
        <StyledLink to={`/room/${id}`}>
          <Button>See the room</Button>
        </StyledLink>
      </Container>
    );
  }
}

RoomDescription.propTypes = propTypes;
RoomDescription.defaultProps = defaultProps;

export default RoomDescription;

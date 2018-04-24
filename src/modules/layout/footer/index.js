import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {colors} from "config/theme";

const Container = styled.div`
  height: 60px;
  display: flex;
  border-top: 2px solid ${colors.lemonGreen};
  background-color: rgba(243, 227, 49, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoBox = styled.div`
  width: 15vw;
  height: 80%;
  display: flex;
  justify-content: space-around;
`;
const Logo = styled.img`
  height: 100%;
  border-radius: 25px;
`;

const propTypes = {};
const defaultProps = {};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <LogoBox>
          <Logo src="/img/facebook.jpg" />
          <Logo src="/img/twitter.jpg" />
        </LogoBox>
      </Container>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;

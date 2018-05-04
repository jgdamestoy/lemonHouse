import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "config/theme";

const Container = styled.div`
  height: 60px;
  display: flex;
  border-top: 2px solid ${colors.lemonGreen};
  background-color: rgba(243, 227, 49, 0.8);
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

class Footer extends Component {
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

export default Footer;

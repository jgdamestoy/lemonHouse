import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "config/theme";

import { config as CONFIG } from "config/";

const Container = styled.div`
  height: 60px;
  display: flex;
  border-top: 2px solid ${colors.lemonYellow};
  background-color: ${colors.lightWhite};
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
const SocialButton = styled.a`
  text-decoration: none;
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
          <SocialButton target="_blank" href={CONFIG.FACEBBOK_URL}>
            <Logo src={`${CONFIG.CDN}/img/facebook.jpg`} />
          </SocialButton>
          <SocialButton target="_blank" href={CONFIG.TWITTER_URL}>
            <Logo src={`${CONFIG.CDN}/img/twitter.jpg`} />
          </SocialButton>
        </LogoBox>
      </Container>
    );
  }
}

export default Footer;

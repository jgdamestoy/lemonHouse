import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {colors, fontSize} from "config/theme";

import GoogleMap from "./GoogleMap";

const Container = styled.div`
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: ${colors.lemonGreen}
`;
const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 25px;
`;
const Content = styled.div`
    display: flex;
`;
const LeftContent = styled.div`
    width: 40vw;
    height: 40vw;
`;
const RightContent = styled.div`
    width: 40vw;
    height: 40vw;
    font-size: ${fontSize.subtitle}
    display: flex;
    justify-content: center;
    align-items: center;
`;

const propTypes = {};
const defaultProps = {};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Title> Contact & Location</Title>
        <Content>
          <LeftContent>
            <GoogleMap />
          </LeftContent> 
          
          <RightContent>
            LEMON HOUSE SAMUI<br />
            230/11 Moo 1 - MAENAM - KOH SAMUI<br />
            SURAT THANI - 84330<br />
            lemonhouse.samui@gmail.com<br />
            Stéphanie +66 97 274 3684<br />
            Jean    +66 95 843 2569<br />
          </RightContent>
        </Content>
      </Container>
    )
  }
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;

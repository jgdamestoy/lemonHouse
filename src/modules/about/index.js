import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {colors} from "config/theme"

import {data} from "./data";
import TextBlock from "./TextBlock";
import ImgBlock from "./ImgBlock";

const Container = styled.div`
    width: 100vw;
    padding: 10vw;
    display: flex;
    flex-direction: column;
`
const Block = styled.div`
    width: 80vw;
    height: 20vw;
    padding-bottom: 2vh;
    padding-top: 2vh;
    display: flex;
    border-bottom: 2px solid ${colors.lemonGreen};
`
const Title = styled.div`
    width: 80vw 
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: ${colors.lemonGreen};
    padding-bottom: 15px;
`
const Footer = styled.div`
    width: 80vw;
    font-size: 20px;
    font-weight: bold;
    padding-top: 5vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.div`
    padding-bottom: 15px;
`
const ImgFooter = styled.img`
    width: 80vh;
`
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

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <Container>
        <Title>NOUVEAUX PROPRIETAIRES ET NOUVELLE EQUIPE DEPUIS MI-MARS 2018</Title>
        {data.map((item, index) => {
            return(
                item.pos === "right" ?
                (
                    <Block key={index}>
                        <TextBlock text={item.text} />
                        <ImgBlock img={item.img} />
                    </Block>
                )
                :
                (
                    <Block key={index}>
                        <ImgBlock img={item.img} />
                        <TextBlock text={item.text} />
                    </Block>
                )

            )
        })}
        <Footer>
            <Text>
                Nous parlons français et anglais et serons heureux de vous rencontrer.<br />
                Stéphanie et Jean.
            </Text>
            <ImgFooter src="/img/IMG_5970.JPG"/>
            <BookingButton 
              target="_blank"
              href="https://www.booking.com/index.fr.html"
            >
              Book Now
            </BookingButton>
        </Footer>
      </Container>
    )
  }
}

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;

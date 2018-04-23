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
    text-align: center;
    padding-top: 5vh;
`
const Text = styled.div`
`

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
        {data.map((item) => {
            return(
                item.pos === "right" ?
                (
                    <Block>
                        <TextBlock text={item.text} />
                        <ImgBlock img={item.img} />
                    </Block>
                )
                :
                (
                    <Block>
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
        </Footer>
      </Container>
    )
  }
}

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;

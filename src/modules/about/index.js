import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl, defineMessages } from "react-intl";

import { colors, breakPoints, fontSize } from "config/theme";
import { data } from "config/aboutData";
import TextBlock from "./TextBlock";
import ImgBlock from "./ImgBlock";
import Footer from "./Footer";

const Container = styled.div`
  width: 100vw;
  padding: 10vh 10vw;
  display: flex;
  flex-direction: column;
`;
const Padding = styled.div`
  height: 2vh;
  @media (min-width: ${breakPoints.std}) {
    display: none;
  }
`;
const Block = styled.div`
  width: 80vw;
  padding: 2vh 0;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${colors.lemonGreen};
  @media (min-width: ${breakPoints.std}) {
    flex-direction: row;
  }
`;
const Title = styled.div`
  width: 80vw;
  text-transform: uppercase;
  text-align: center;
  font-size: ${fontSize.title.mobile};
  font-weight: bold;
  color: ${colors.lemonGreen};
  padding-bottom: 2vh;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.title.std};
  }
`;

class Description extends Component {
  render() {
    const { intl } = this.props;
    const messages = defineMessages({
      title: {
        id: "about.title",
        defaultMessage: "New owners and new team since half-march 2018"
      }
    });

    return (
      <Container>
        <Title>{intl.formatMessage(messages.title)}</Title>

        {data.map((item, index) => {
          return item.pos === "right" ? (
            <Block key={index}>
              <TextBlock text={item.text} />
              <Padding />
              <ImgBlock img={item.img} />
            </Block>
          ) : (
            <Block key={index}>
              <ImgBlock img={item.img} />
              <Padding />
              <TextBlock text={item.text} />
            </Block>
          );
        })}

        <Footer />
      </Container>
    );
  }
}

export default injectIntl(Description);

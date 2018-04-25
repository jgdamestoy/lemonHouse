import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { injectIntl, defineMessages } from "react-intl";

import { colors, breakPoints } from "config/theme";
import StdButton from "components/StdButton";

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${props =>
    props.scrolled ? `2px solid ${colors.lemonYellow}` : "none"};
  transition: background-color 1s ease;
  background-color: ${props =>
    props.scrolled ? "rgba(240, 240, 240, 0.5)" : "transparent"};
`;
const Logo = styled.div`
  background: url("/img/logo.png") no-repeat center center;
  background-size: contain;
  width: 50px;
  height: 60px;
  @media (min-width: ${breakPoints.std}) {
    background: ${props =>
        props.scrolled ? `url("/img/logoH.png")` : `url("/img/logo.png")`}
      no-repeat center center;
    background-size: contain;
    width: ${props => (props.scrolled ? "320px" : "50px")};
  }
`;
const LeftContent = styled.div`
  margin-left: 2vw;
`;
const RightContent = styled.div`
  margin-right: 2vw;
  display: flex;
`;

class ClassicHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }
  /* Change oppacity onScroll */
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (this.state.scrolled === false && window.scrollY !== 0) {
      this.setState({ scrolled: true });
    } else if (this.state.scrolled === true && window.scrollY === 0) {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { intl } = this.props;
    const messages = defineMessages({
      about: {
        id: "header.about",
        defaultMessage: "About"
      },
      rooms: {
        id: "header.rooms",
        defaultMessage: "Rooms"
      },
      around: {
        id: "header.around",
        defaultMessage: "What's around"
      }
    });
    return (
      <Wrapper scrolled={this.state.scrolled}>
        <LeftContent>
          <Link to="/">
            <Logo
              backgroundImgLong="/img/logoH.png"
              backgroundImg="/img/logoH.png"
              scrolled={this.state.scrolled}
            />
          </Link>
        </LeftContent>

        <RightContent>
          <StdButton to="/about" label={intl.formatMessage(messages.about)} />
          <StdButton
            to="/allrooms"
            label={intl.formatMessage(messages.rooms)}
          />
          <StdButton to="/around" label={intl.formatMessage(messages.around)} />
        </RightContent>
      </Wrapper>
    );
  }
}

export default injectIntl(ClassicHeader);

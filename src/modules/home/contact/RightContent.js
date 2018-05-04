import React, { Component } from "react";
import styled from "styled-components";

import { colors, fontSize, breakPoints } from "config/theme";

const Container = styled.div`
  width: 80vw;
  color: ${colors.lemonGreen};
  font-size: ${fontSize.description.mobile};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.description.std};
    width: 40vw;
    margin-top: 0vh;
  }
`;

class RightContent extends Component {
  render() {
    return (
      <Container>
        LEMON HOUSE SAMUI<br />
        230/11 Moo 1 - MAENAM - KOH SAMUI<br />
        SURAT THANI - 84330<br />
        lemonhouse.samui@gmail.com<br />
        Stéphanie +66 97 274 3684<br />
        Jean +66 95 843 2569<br />
      </Container>
    );
  }
}

export default RightContent;

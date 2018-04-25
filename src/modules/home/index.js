import React, { Component } from "react";

import Cover from "./cover/";
import Contact from "./contact/";

class Home extends Component {
  render() {
    return (
      <div>
        <Cover />

        <Contact />
      </div>
    );
  }
}

export default Home;

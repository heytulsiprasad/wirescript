import React from "react";
import Hero from "../Hero";
import Arrow from "../../images/arrow";

import { HeroText, Slider, BigHead, BigBody } from "../styles";

function IndexPage() {
  return (
    <Hero>
      <HeroText>
        <BigHead>The Wirescript</BigHead>
        <BigBody>
          A journal of an experienced googler and dope ass coder.
        </BigBody>
      </HeroText>
      <Slider>
        <Arrow />
        <p>Browse topics and resources</p>
      </Slider>
    </Hero>
  );
}

export default IndexPage;

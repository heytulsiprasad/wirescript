import React from "react";
import Hero from "../Hero";

import { HeroText, Slider, BigHead, BigBody } from "../styles";

function AboutPage() {
  return (
    <Hero>
      <HeroText>
        <BigHead>About Me</BigHead>
        <BigBody>
          Let's change ourselves first, so that the world could change by itself
        </BigBody>
      </HeroText>
    </Hero>
  );
}

export default AboutPage;

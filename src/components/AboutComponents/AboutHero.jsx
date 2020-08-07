import React from "react";
import Hero from "../Hero";

import { HeroText, Slider, BigHead, BigBody } from "../reusable/styles";

function AboutPage() {
  return (
    <Hero>
      <HeroText>
        <BigHead>About Me</BigHead>
      </HeroText>
    </Hero>
  );
}

export default AboutPage;

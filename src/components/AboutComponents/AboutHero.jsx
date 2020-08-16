import React from "react";
import Hero from "../Hero";

import { HeroHeader, BigHead, BigBody } from "../styles";

function AboutPage() {
  return (
    <Hero>
      <HeroHeader>
        <BigHead
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          About Me
        </BigHead>
        <BigBody
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease"
          data-sal-duration="1200"
        >
          Let's change ourselves first, so that the world could change by
          itself.
        </BigBody>
      </HeroHeader>
    </Hero>
  );
}

export default AboutPage;

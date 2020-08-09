import React from "react";
import Hero from "../Hero";

import { HeroHeader, BigHead, BigBody } from "../styles";

function AboutPage() {
  return (
    <Hero>
      <HeroHeader>
        <BigHead>About Me</BigHead>
        <BigBody>
          Let's change ourselves first, so that the world could change by
          itself.
        </BigBody>
      </HeroHeader>
    </Hero>
  );
}

export default AboutPage;

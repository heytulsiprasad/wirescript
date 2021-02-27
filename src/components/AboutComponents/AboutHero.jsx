import React from "react";
import Hero from "../Hero";

import { HeroHeader, BigHead, BigBody, Author } from "../styles";

function AboutPage() {
  return (
    <Hero>
      <HeroHeader>
        <BigHead>About Me</BigHead>
        <BigBody>
          If you can't stop thinking about it, don't stop working for it.
        </BigBody>
        <Author>Handwritten by Tulsi Prasad</Author>
      </HeroHeader>
    </Hero>
  );
}

export default AboutPage;

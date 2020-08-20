import React from "react";
import Hero from "../Hero";

import { HeroHeader, BigHead, BigBody, Author } from "../styles";

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
          If you can't stop thinking about it, don't stop working for it.
        </BigBody>
        <Author
          data-sal="slide-up"
          data-sal-delay="450"
          data-sal-easing="ease"
          data-sal-duration="1200"
        >
          Handwritten by Tulsi Prasad
        </Author>
      </HeroHeader>
    </Hero>
  );
}

export default AboutPage;

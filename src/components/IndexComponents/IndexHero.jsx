import React from "react";

import Hero from "../Hero";
import { HeroHeader, BigHead, BigBody, Author } from "../styles";

function IndexPage({ head }) {
  return (
    <Hero>
      <HeroHeader>
        <BigHead
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          {head}
        </BigHead>
        <BigBody
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          numquam!
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

IndexPage.defaultProps = {
  head: "Just a head",
};

export default IndexPage;

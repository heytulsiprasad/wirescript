import React from "react";
import Hero from "../Hero";
import Arrow from "../../images/arrow";

import { HeroText, Slider, BigHead, BigBody } from "../reusable/styles";

function BlogsPage() {
  return (
    <Hero>
      <HeroText>
        <BigHead>More Content</BigHead>
        <BigBody>
          From the journal of an experienced googler and dope ass coder.
        </BigBody>
      </HeroText>
      <Slider>
        <Arrow />
        <p>Browse all blogs and content</p>
      </Slider>
    </Hero>
  );
}

export default BlogsPage;

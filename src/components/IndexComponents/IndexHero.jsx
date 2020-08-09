import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components";

import Hero from "../Hero";
import Arrow from "../../images/arrow";
import { HeroHeader, Slider, BigHead, BigBody } from "../styles";

const SlideLink = styled(AnchorLink)`
  &,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`;

function IndexPage() {
  return (
    <Hero>
      <HeroHeader>
        <BigHead>The Wirescript</BigHead>
        <BigBody>
          A journal of an experienced googler and dope ass coder.
        </BigBody>
      </HeroHeader>
      <SlideLink to="/#intro">
        <Slider>
          <Arrow />
          <p>Browse topics and resources</p>
        </Slider>
      </SlideLink>
    </Hero>
  );
}

export default IndexPage;

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Hero from "../Hero";
import Arrow from "../../images/arrow";
import { HeroHeader, Slider, BigHead, BigBody } from "../styles";

const Slidey = styled(Link)`
  &,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`;

function IndexPage({ head }) {
  return (
    <Hero>
      <HeroHeader>
        <BigHead>{head}</BigHead>
        <BigBody>
          A journal of an experienced googler and dope ass coder.
        </BigBody>
      </HeroHeader>
      <Slidey to="/#intro">
        <Slider>
          <Arrow />
          <p>Browse topics and resources</p>
        </Slider>
      </Slidey>
    </Hero>
  );
}

IndexPage.defaultProps = {
  head: "Just a head",
};

export default IndexPage;

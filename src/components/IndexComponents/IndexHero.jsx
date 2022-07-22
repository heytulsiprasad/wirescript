import React from "react";

import Hero from "../Hero";
import { HeroHeader, BigHead, BigBody, Author } from "../styles";

function IndexPage({ head }) {
  return (
    <Hero>
      <HeroHeader>
        <BigHead>{head}</BigHead>
        <BigBody>
          A journey of a thousand miles, going from scratch to all the way up
        </BigBody>
        <Author>Beta version</Author>
      </HeroHeader>
    </Hero>
  );
}

IndexPage.defaultProps = {
  head: "Just a head",
};

export default IndexPage;

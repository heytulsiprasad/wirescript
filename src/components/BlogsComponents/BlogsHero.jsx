import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Hero from "../Hero";
import Arrow from "../../images/arrow";
import { HeroHeader, BigHead, BigBody } from "../styles";

const HeroFoot = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10rem;
  padding-bottom: 2rem;
`;

const Slidey = styled(AnchorLink)`
  align-self: flex-end;
  display: flex;

  &,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin-left: 0.9rem;
    font-weight: 500;
  }
`;

const Anchors = styled.div`
  text-align: right;
  grid-column: 3 / span 1;
`;

const Anchor = styled(AnchorLink)`
  font-weight: 500;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }

  &,
  &:hover,
  &:active,
  &:focus {
    display: block;
    color: inherit;
    text-decoration: none;
  }
`;

function BlogsPage() {
  return (
    <Hero>
      <HeroHeader>
        <BigHead>More Content</BigHead>
        <BigBody>
          From the journal of an experienced googler and dope ass coder.
        </BigBody>
      </HeroHeader>
      {/* <Slider>
        <Arrow />
        <p>Browse all blogs and content</p>
      </Slider> */}
      <HeroFoot>
        <Slidey to="/blog#web">
          <Arrow />
          <p>Browse all blogs and content</p>
        </Slidey>
        <Anchors>
          <Anchor to="/blog#web">Web</Anchor>
          <Anchor to="/blog#physics">Physics</Anchor>
          <Anchor to="/blog#motivation">Motivation</Anchor>
          <Anchor to="/blog#hardware">Hardware</Anchor>
        </Anchors>
      </HeroFoot>
    </Hero>
  );
}

export default BlogsPage;

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Hero from "../Hero";
import Arrow from "../../images/arrow";
import { HeroHeader, BigHead, BigBody } from "../styles";

const HeroFoot = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Slidey = styled(Link)`
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

function BlogsPage() {
  return (
    <Hero>
      <HeroHeader>
        <BigHead>More Content</BigHead>
        <BigBody>
          From the journal of an experienced googler and dope ass coder.
        </BigBody>
      </HeroHeader>
      <HeroFoot>
        <Slidey to="/blog#web">
          <Arrow />
          <p>Browse all blogs and content</p>
        </Slidey>
      </HeroFoot>
    </Hero>
  );
}

export default BlogsPage;

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "./Layout";
import Articles from "./Articles";

const Main = styled.main`
  width: 100%;
  padding: 0 0 50px;
  color: var(--color-primary);
`;

const BoldText = styled.h2`
  text-align: right;
  font-size: 12vh;
  letter-spacing: -2px;
  font-weight: 600;
  line-height: 1.05;

  span {
    display: block;

    &:first-of-type {
      color: var(--color-tertiary);
    }
  }
`;

const Refer = styled(Link)`
  display: block;
  font-size: 1.3rem;
  margin-top: 2rem;
  font-weight: 500;
  width: fit-content;

  &,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }

  span {
    color: var(--color-tertiary);
  }
`;

const blogs = [
  {
    date: "MAY 26 2020",
    title: "Introducing Rekishi",
    description:
      "Becoming frustrated with gaps in the history api, I built Rekishi, a minimal pubsub wrapper to watch for URL changes.",
  },
  {
    date: "APR 18 2020",
    title: "How to name your agency with NLP",
    description:
      " An introduction to some of the basic concepts behind Natural Language Processing, and how they can be put to use.",
  },
  {
    date: "FEB 10 2020",
    title: "Synthwave '84 has changed",
    description:
      "Neon Dreams is a new release of Synthwave '84 that takes a different approach to enabling the glow than before.",
  },
  {
    date: "JAN 22 2020",
    title: "Launch day",
    description:
      " After several years in the wilderness, I have a new website. This post gives a little background on the twists and turns along the path to launch - from the tech choices to the design.",
  },
];

function LatestArticles() {
  return (
    <Layout bgColor="var(--color-secondary)">
      <Main>
        <BoldText>
          <span>Latest</span>
          <span>Articles</span>
        </BoldText>
        <Articles blogs={blogs} />
        <Refer to="/blog">
          <span>More</span> Articles
        </Refer>
      </Main>
    </Layout>
  );
}

export default LatestArticles;

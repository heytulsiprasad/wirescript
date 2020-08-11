import React from "react";
import styled from "styled-components";

import Layout from "./../Layout";
import Articles from "../Articles";

const AllBlogsContainer = styled.div`
  padding: 3rem 0 8rem 0;
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

const series = [
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
];

const BigText = styled.h2`
  font-size: clamp(5rem, 8vw, 8rem);
  font-weight: 500;
  letter-spacing: -3px;
  color: var(--color-tertiary);
  text-align: right;
  padding: 1rem 0;

  @media (max-width: 1000px) {
    text-align: left;
  }
`;

function AllBlogs() {
  return (
    <Layout bgColor="var(--color-white)">
      <AllBlogsContainer>
        <BigText id="web">Web</BigText>
        <Articles blogs={blogs} />
        <BigText id="hardware">Hardware</BigText>
        <Articles blogs={series} />
        <BigText id="physics">Physics</BigText>
        <Articles blogs={blogs} />
      </AllBlogsContainer>
    </Layout>
  );
}

export default AllBlogs;

import React from "react";
import styled from "styled-components";

import Layout from "./../Layout";
import Articles from "../Articles";

const AllBlogsContainer = styled.div`
  padding: 2rem 0 8rem 0;
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

const BlogCategory = styled.div`
  padding: 1rem 0;
`;

const CategoryTitle = styled.h2`
  font-size: clamp(5rem, 6vw, 8rem);
  font-weight: 500;
  letter-spacing: -3px;
  color: var(--color-tertiary);
  padding: 1rem 0 2rem;
`;

function AllBlogs() {
  return (
    <Layout bgColor="var(--color-white)">
      <AllBlogsContainer>
        <BlogCategory>
          <CategoryTitle id="web">Web</CategoryTitle>
          <Articles blogs={blogs} />
        </BlogCategory>
        <BlogCategory>
          <CategoryTitle id="hardware">Hardware</CategoryTitle>
          <Articles blogs={series} />
        </BlogCategory>
        <BlogCategory>
          <CategoryTitle id="physics">Physics</CategoryTitle>
          <Articles blogs={blogs} />
        </BlogCategory>
      </AllBlogsContainer>
    </Layout>
  );
}

export default AllBlogs;

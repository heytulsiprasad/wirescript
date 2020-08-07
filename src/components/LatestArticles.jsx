import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "./Layout";

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

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const Entry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0;
`;

const EntryDate = styled.div`
  font-size: 0.9rem;
  color: var(--color-text-gray);
  text-transform: uppercase;
  min-width: 10rem;
  position: relative;
  margin-top: 12px;

  &::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    width: 100px;
    height: 2px;
    background: var(--color-text-gray);
  }
`;

const EntryDetail = styled.div`
  width: 100%;
  margin-left: 12rem;

  & > * + * {
    margin-top: 1.5rem;
  }
`;

const EntryTitle = styled.div`
  font-family: var(--font-raleway);
  font-size: 2.25rem;
  font-weight: 600;
  align-self: flex-end;
  width: 100%;
`;

const EntryDescription = styled.div`
  font-family: var(--font-raleway);
  font-size: 1.1rem;
  font-weight: 400;
  width: 80%;
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

function LatestArticles() {
  return (
    <Layout bgColor="var(--color-secondary)">
      <Main>
        <BoldText>
          <span>Latest</span>
          <span>Articles</span>
        </BoldText>
        <Entries>
          <Entry>
            <EntryDate>MAY 26 2020</EntryDate>
            <EntryDetail>
              <EntryTitle>Introducing Rekishi</EntryTitle>
              <EntryDescription>
                Becoming frustrated with gaps in the history api, I built
                Rekishi, a minimal pubsub wrapper to watch for URL changes.
              </EntryDescription>
            </EntryDetail>
          </Entry>
          <Entry>
            <EntryDate>APR 18 2020</EntryDate>
            <EntryDetail>
              <EntryTitle>How to name your agency with NLP</EntryTitle>
              <EntryDescription>
                An introduction to some of the basic concepts behind Natural
                Language Processing, and how they can be put to use.
              </EntryDescription>
            </EntryDetail>
          </Entry>
          <Entry>
            <EntryDate>FEB 10 2020</EntryDate>
            <EntryDetail>
              <EntryTitle>Synthwave '84 has changed</EntryTitle>
              <EntryDescription>
                Neon Dreams is a new release of Synthwave '84 that takes a
                different approach to enabling the glow than before.
              </EntryDescription>
            </EntryDetail>
          </Entry>
          <Entry>
            <EntryDate>JAN 22 2020</EntryDate>
            <EntryDetail>
              <EntryTitle>Launch day</EntryTitle>
              <EntryDescription>
                After several years in the wilderness, I have a new website.
                This post gives a little background on the twists and turns
                along the path to launch - from the tech choices to the design.
              </EntryDescription>
            </EntryDetail>
          </Entry>
        </Entries>
        <Refer to="/blog">
          <span>More</span> Articles
        </Refer>
      </Main>
    </Layout>
  );
}

export default LatestArticles;

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Main = styled.main`
  width: 100%;
  padding: 100px 0 50px;
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
      color: #659d89;
    }
  }
`;

const EntriesContainer = styled.div`
  display: inline-block;
`;

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;

const Entry = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;

const EntryDate = styled.div`
  font-size: 1rem;
  color: gray;
  align-self: flex-end;
  width: 10rem;
`;

const EntryTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  margin-left: 4rem;
  align-self: flex-end;
  margin-bottom: -4px;
`;

const FeaturedBlog = styled.div`
  padding-top: 5rem;
  display: inline-block;
`;

const FeaturedBlogTitle = styled.h2`
  font-size: 3rem;
`;

const FeaturedEntries = styled(Entries)`
  padding-top: 30px;
`;

const ReferToBlog = styled(Link)`
  display: block;
  padding-top: 5rem;
  font-weight: 500;

  &,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }

  span {
    color: #659d89;
  }
`;

function LatestArticles() {
  return (
    <Main>
      <BoldText>
        <span>Latest</span>
        <span>Articles</span>
      </BoldText>
      <EntriesContainer>
        <Entries>
          <Entry>
            <EntryDate>a few seconds ago</EntryDate>
            <EntryTitle>The myths and hypes about remote work</EntryTitle>
          </Entry>
          <Entry>
            <EntryDate>13 days ago</EntryDate>
            <EntryTitle>The myths and hypes about remote work</EntryTitle>
          </Entry>
          <Entry>
            <EntryDate>27 days ago</EntryDate>
            <EntryTitle>The myths and hypes about remote work</EntryTitle>
          </Entry>
          <Entry>
            <EntryDate>a year ago</EntryDate>
            <EntryTitle>The myths and hypes about remote work</EntryTitle>
          </Entry>
          <Entry>
            <EntryDate>two year ago</EntryDate>
            <EntryTitle>The myths and hypes about remote work</EntryTitle>
          </Entry>
        </Entries>
      </EntriesContainer>
      <FeaturedBlog>
        <FeaturedBlogTitle>Those Raw Thoughts</FeaturedBlogTitle>
        <FeaturedEntries>
          <Entry>
            <EntryDate>a year ago</EntryDate>
            <EntryTitle>The myths and hypes about remote work</EntryTitle>
          </Entry>
          <Entry>
            <EntryDate>two year ago</EntryDate>
            <EntryTitle>The myths and hypes about remote work</EntryTitle>
          </Entry>
        </FeaturedEntries>
      </FeaturedBlog>
      <ReferToBlog to="/blog">
        <span>All of</span> them
      </ReferToBlog>
    </Main>
  );
}

export default LatestArticles;

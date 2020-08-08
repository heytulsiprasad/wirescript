import React from "react";
import styled from "styled-components";

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
  color: var(--color-text-body);
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
    background: var(--color-text-divider);
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

const FeaturedTopic = styled.h3`
  /* text-align: right; */
  padding: 1rem 0 4rem;
  font-size: 6vh;
  letter-spacing: -2px;
  font-weight: 600;
  line-height: 1.05;
`;

function Articles({ blogs, topic }) {
  // `blogs` is an array of objects

  return (
    <Entries>
      <FeaturedTopic>{topic}</FeaturedTopic>
      {blogs.map(({ date, title, description }) => (
        <Entry>
          <EntryDate>{date}</EntryDate>
          <EntryDetail>
            <EntryTitle>{title}</EntryTitle>
            <EntryDescription>{description}</EntryDescription>
          </EntryDetail>
        </Entry>
      ))}
    </Entries>
  );
}

export default Articles;

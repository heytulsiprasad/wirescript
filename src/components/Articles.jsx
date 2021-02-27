import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const Entry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.3333rem 0;

  @media (max-width: 1150px) {
    padding: 2rem 0;
    flex-direction: column;
  }
`;

const EntryDate = styled.div`
  font-size: 0.9rem;
  color: #696969;
  font-weight: 500;
  text-transform: uppercase;
  min-width: 10rem;
  position: relative;
  margin-top: 0.8rem;

  @media (min-width: 1150px) {
    &::after {
      content: "";
      position: absolute;
      left: 100%;
      top: 50%;
      width: 6.6667rem;
      height: 0.1333rem;
      background: var(--color-text-divider);
    }
  }
`;

const EntryDetail = styled.div`
  width: 100%;
  margin-left: 12rem;

  & > * + * {
    margin-top: 1.5rem;
  }

  @media (max-width: 1150px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const EntryTitle = styled.h1`
  font-family: var(--font-title);
  font-size: clamp(1.8rem, 3vw, 2.25rem);
  font-weight: 700;
  color: #000;
  align-self: flex-end;
  width: 100%;
`;

const EntryDescription = styled.p`
  font-family: var(--font-title);
  color: #22211e;
  font-size: 17px;
  line-height: 1.5;
  font-weight: 500;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const NewLink = styled(Link)`
  &,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`;

function Articles({ blogs }) {
  // `blogs` is an array of objects
  // console.log(blogs);

  return (
    <Entries>
      {blogs.map((item, id) => (
        <Entry key={id}>
          <EntryDate>{item.date}</EntryDate>
          <EntryDetail>
            <EntryTitle>
              <NewLink to={item.slug}>{item.title}</NewLink>
            </EntryTitle>
            <EntryDescription>{item.description}</EntryDescription>
          </EntryDetail>
        </Entry>
      ))}
    </Entries>
  );
}

export default Articles;

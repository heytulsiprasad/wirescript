import styled from "styled-components";

export const AllBlogsContainer = styled.div`
  padding: 1rem 0;
`;

export const AllBlogCategories = styled.div`
  margin: 4rem 0 4rem;
  padding: 2rem 0 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  a {
    color: #8c8c8c;
    text-decoration: none;
    font-size: clamp(1.8rem, 3vw, 2rem);
    display: block;
    font-weight: 500;
  }

  a.selected {
    color: #000;
  }
`;

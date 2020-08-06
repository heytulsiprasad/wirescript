import React from "react";
import styled from "styled-components";
import Hero from "../Hero";

const BigText = styled.h2`
  font-size: 5rem;
  padding: 5rem 0;
  font-weight: 400;
`;

function BlogPage() {
  return (
    <Hero>
      <BigText>Hey Blog</BigText>
    </Hero>
  );
}

export default BlogPage;

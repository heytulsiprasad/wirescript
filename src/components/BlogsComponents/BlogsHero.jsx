import React from "react";

import Hero from "../Hero";
import { HeroHeader, BigHead, BigBody, Author } from "../styles";

function BlogsPage() {
  return (
    <Hero>
      <HeroHeader>
        <BigHead>Everything I've ever written</BigHead>
        <BigBody>
          From the day I didn't know who I was, till my last cup of coffee
        </BigBody>
        <Author>Handwritten by Tulsi Prasad</Author>
      </HeroHeader>
    </Hero>
  );
}

export default BlogsPage;

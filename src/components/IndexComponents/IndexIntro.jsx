import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../Layout";
import PictureBox from "../PictureBox";

const Intro = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-column-gap: 2.6667rem;
  grid-row-gap: 4.3333rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HeroText = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.4;
  color: #000;
  position: relative;

  grid-column: 2 / span 2;

  @media (max-width: 1300px) {
    grid-column: 1 / span 2;
  }

  /* // TODO: Create a back tick image */
  /* 
  &::before {
    content: open-quote;
    font-size: 50px;
    position: absolute;
    display: block;
  } */
`;

const IntroText = styled.p`
  color: #000;
  line-height: 1.6;
  grid-row: 2 / span 1;
  grid-column: 2 / span 2;
  font-size: 1.1rem;

  @media (max-width: 1300px) {
    grid-column: 1 / span 2;
  }
`;

function IndexIntro() {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "cycling-on-road.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Layout bgColor="#fff">
      <Intro
        data-sal="fade"
        data-sal-delay="100"
        data-sal-easing="ease-out-expo"
        data-sal-duration="1100"
      >
        <HeroText>
          "The two most important days of your life are the day you were born
          and the day you find out why." — Mark Twain
        </HeroText>
        <IntroText>
          We all know how much essential it is to do something that we love, it
          helps us achieve more and become the best version of ourselves. But do
          we really follow that principle? Ask yourself. I used to think of it
          in my childhood, as most of the things we're taught in school had
          nothing to do with my life, once I was out of school but still
          everyday I had to go there. Now you'd be like, but that's essential
          I'm sorry I was never excited about who united the nomadic tribes of
          the Mongolian plateau in 11th century. But still I had to go to school
          anyway so that's when I started writing.
        </IntroText>
      </Intro>
      <div style={{ padding: "2rem 0 5rem" }}>
        <PictureBox src={data.banner.childImageSharp.fluid} by="nairdasemaj" />
      </div>
    </Layout>
  );
}

export default IndexIntro;

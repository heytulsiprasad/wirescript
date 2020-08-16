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

  grid-column: 2 / span 2;

  @media (max-width: 1300px) {
    grid-column: 1 / span 2;
  }
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
      banner: file(relativePath: { eq: "guard-infront-of-window.jpg" }) {
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
        data-sal="slide-left"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <HeroText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          sequi nihil repudiandae, autem illo expedita commodi aut officiis ipsa
          cumque harum nisi blanditiis sint saepe! Nulla, amet voluptas.
        </HeroText>
        <IntroText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sunt
          nulla explicabo. Voluptatum, vel aliquam. Perferendis incidunt illum
          modi suscipit porro, rem, blanditiis aspernatur cupiditate vitae
          perspiciatis est accusantium voluptates rerum cum maxime, aliquid
          animi. Consectetur aspernatur, quibusdam, totam explicabo illum a
          magnam, facere blanditiis enim in eligendi tempora? Nemo.
        </IntroText>
      </Intro>
      <div style={{ padding: "2rem 0 5rem" }}>
        <PictureBox src={data.banner.childImageSharp.fluid} />
      </div>
    </Layout>
  );
}

export default IndexIntro;

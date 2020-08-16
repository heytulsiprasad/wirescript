import React, { Fragment } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "./../Layout";
import PictureBox from "./../PictureBox";

const Intro = styled.div`
  padding: 5rem 0 8rem;
  display: grid;
  grid-column-gap: 2.6667rem;
  grid-row-gap: 5.3333rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HeroText = styled.h2`
  font-size: 1.8rem;
  max-width: 53.3333rem;
  font-weight: 500;
  line-height: 2.6667rem;
  color: #000;

  grid-column: 1 / span 2;

  @media (max-width: 1300px) {
    grid-column: 1 / span 2;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const IntroText = styled.p`
  color: #000;
  line-height: 1.6;
  font-size: 1.1rem;
  grid-row: 2 / span 1;
  grid-column: 1 / span 2;
`;

function AboutIntro() {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "gemma-evans.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Fragment>
      <Layout bgColor="var(--color-white)">
        <Intro
          data-sal="slide-left"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1500"
        >
          <HeroText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            laboriosam sunt eveniet quis culpa sed voluptatibus dolore. Hic
            soluta sequi temporibus rerum saepe ut aliquam dicta, maxime dolorum
            minima architecto?
          </HeroText>
          <IntroText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            aperiam nesciunt corporis tempora quis dolore eaque quasi, eius hic
            commodi fuga quo at fugit? Ullam, deleniti. Magni, atque! Similique
            quidem laboriosam voluptatem modi eaque expedita obcaecati molestiae
            repudiandae nemo quasi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error aperiam nesciunt corporis tempora quis
            dolore eaque quasi, eius hic commodi fuga quo at fugit? Ullam,
            deleniti. Magni, atque! Similique quidem laboriosam voluptatem modi
            eaque expedita obcaecati repudiandae nemo quasi.
          </IntroText>
        </Intro>
        <div
          style={{ padding: "2rem 0 5rem" }}
          data-sal="zoom-out"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <PictureBox src={data.banner.childImageSharp.fluid} />
        </div>
        <Intro
          style={{ padding: "2rem 0 5rem" }}
          data-sal="slide-left"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1500"
        >
          <HeroText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quo dicta eligendi numquam molestias commodi sed officiis vitae
            error maiores at deleniti, alias voluptatum expedita laudantium
            saepe vel illo.
          </HeroText>
          <IntroText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            aperiam nesciunt corporis tempora quis dolore eaque quasi, eius hic
            commodi fuga quo at fugit? Ullam, deleniti. Magni, atque! Similique
            quidem laboriosam voluptatem modi eaque expedita obcaecati molestiae
            repudiandae nemo quasi, em ipsum dolor sit amet consectetur
            adipisicing elit. Error apTeriam nesciunt corporis tempora quis
            dolore eaque quasi, eius hic commodi fuga quo at fugit? Ullam,
            deleniti. Magni, atque! Similique quidem laboriosam voluptatem modi
            eaque expedita obcaecati molestiae repudiandae nemo quasi.
          </IntroText>
        </Intro>
      </Layout>
    </Fragment>
  );
}

export default AboutIntro;

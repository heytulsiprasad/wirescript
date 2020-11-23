import React, { Fragment } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "./../Layout";
import PictureBox from "./../PictureBox";

const Intro = styled.div`
  padding: 5rem 0 2rem;
  display: grid;
  grid-column-gap: 2.6667rem;
  grid-row-gap: 5.3333rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin-bottom: 3rem;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HeroText = styled.h2`
  font-size: 1.8rem;
  max-width: 53.3333rem;
  font-weight: 500;
  line-height: 1.4;
  color: #000;

  grid-column: 1 / span 2;

  @media (max-width: 1300px) {
    grid-column: 1 / span 2;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const IntroText = styled.div`
  color: #000;
  line-height: 1.6;
  font-size: 1.1rem;
  grid-row: 2 / span 1;
  grid-column: 1 / span 2;

  @media (max-width: 500px) {
    font-size: 1rem;
  }

  a {
    color: inherit;
  }
`;

function AboutIntro() {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "books-on-shelf.jpg" }) {
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
          role="main"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-easing="ease-out-expo"
          data-sal-duration="1000"
        >
          <HeroText>
            Everyone you meet or speak to is fighting a battle you know nothing
            about. So, be kind. Always.
          </HeroText>
          <IntroText>
            <p>
              Hey, I'm an aspiring software developer and I love to write, so
              much that I never needed a handwriting book in my childhood. I
              used to write about{" "}
              <a href="https://akidonscience.blogspot.com/2019/09/did-binary-fission-shape-our-universe.html">
                physics
              </a>
              , space, life, stuff that bugged me when I am alone (which I still
              do) and now mostly about tech and things I'm learning.
            </p>
            <br />
            <p>
              One fine day, I wrote something on a piece of paper which got lost
              or maybe I kept somewhere I couldn't find, and then I realized
              that everything I've ever wrote would be lost someday without even
              seeing the light of day, and so I decided to make this website, to
              store everything I write. Also, you can subscribe to my newsletter
              to get more resources on frontend and design stuff. I also publish
              on <a href="https://dev.to/heytulsiprasad">Dev</a> and as a side
              note I now hangout most of the time on our{" "}
              <a href="https://bit.ly/wirescript">Discord</a>, which you can
              join to discuss stuff about tech, life, health or anything.
            </p>
          </IntroText>
        </Intro>
        <div
          style={{ padding: "2rem 0 5rem" }}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-easing="ease-out-expo"
          data-sal-duration="1100"
        >
          <PictureBox src={data.banner.childImageSharp.fluid} by="siebaut" />
        </div>
        <Intro
          style={{ padding: "2rem 0 5rem" }}
          data-sal="fade"
          data-sal-delay="200"
          data-sal-easing="ease-out-expo"
          data-sal-duration="1000"
        >
          <HeroText>
            You'll never know what you're capable of if you don't try, so get
            out of comfort zone often, you'll never regret it.
          </HeroText>
          <IntroText>
            <p>
              No matter how hard you try or what you've planned to overcome
              procrastination and acheive your goals, life always finds out a
              way to kick you back to your comfort zone, without you even
              knowing. So, be persistent in whatever you do or believe in it,
              because a river cuts through rock not because of its power, but
              because of its persistence.
            </p>
          </IntroText>
        </Intro>
      </Layout>
    </Fragment>
  );
}

export default AboutIntro;

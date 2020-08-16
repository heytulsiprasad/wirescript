import React, { Fragment } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const BioContainer = styled.div`
  padding: 4rem 0 1rem;
  margin-bottom: 4rem;
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: max-content 1fr;

  @media (max-width: 500px) {
    grid-row-gap: 3rem;
    grid-template-rows: max-content 1fr;
  }

  .profile-img {
    border-radius: 50%;
    max-width: 80px;
    display: block;
    margin: 0 auto;

    @media (max-width: 500px) {
      grid-row: 1 / 2;
    }
  }

  .biotext {
    @media (max-width: 500px) {
      grid-row: 2 / 3;
      max-width: 85vw;
    }
  }

  p {
    font-size: 15px;
    line-height: 1.6;
  }

  h2 {
    font-family: var(--font-title);
    margin-bottom: 1rem;
    margin-top: -2px;
  }
`;

const Share = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .line {
    flex-grow: 1;
    border: 0.5px solid #d3d3d3;
    margin-right: 20px;
  }

  span {
    text-transform: uppercase;
    margin-right: 20px;
    font-size: 0.75rem;
    opacity: 0.7;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0px;
    font-size: 1.125rem;
    color: inherit;
    cursor: pointer;

    &:hover {
      color: #d3d3d3;
    }
  }

  button.twitter {
    margin-right: 20px;
  }
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "hey-tulsi-prasad.jpg" }) {
        childImageSharp {
          id
          fixed(height: 80, width: 80, grayscale: true) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Fragment>
      <Share>
        <div className="line"></div>
        <span>Share Article</span>
        <button aria-label="twitter" className="twitter">
          Twitter
        </button>
        <button aria-label="facebook" className="facebook">
          Facebook
        </button>
      </Share>
      <BioContainer>
        <Img
          className="profile-img"
          fixed={data.profile.childImageSharp.fixed}
        />
        {/* <img src="https://picsum.photos/80/" className="profile-image" /> */}
        <div className="biotext">
          <h2>
            <strong>Tulsi Prasad</strong>
          </h2>
          <p>
            He is an aspiring software developer and blogger. He believes that
            technology combined with human enthusiasm can achieve anything in
            the world. He avidly takes part in Open Source projects and Meetups
            in his community for greater good. Currently, he continues doing
            freelance projects and learning Information Technology as a
            graduate.
          </p>
        </div>
      </BioContainer>
    </Fragment>
  );
};

export default Bio;

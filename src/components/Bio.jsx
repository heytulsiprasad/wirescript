import React from "react";
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
    <BioContainer>
      <Img className="profile-img" fixed={data.profile.childImageSharp.fixed} />
      {/* <img src="https://picsum.photos/80/" className="profile-image" /> */}
      <div className="biotext">
        <h2>
          <strong>Tulsi Prasad</strong>
        </h2>
        <p>
          He is an aspiring software developer and blogger. He believes that
          technology combined with human enthusiasm can achieve anything in the
          world. He avidly takes part in Open Source projects and Meetups in his
          community for greater good. Currently, he continues doing freelance
          projects and learning Information Technology as a graduate.
        </p>
      </div>
    </BioContainer>
  );
};

export default Bio;

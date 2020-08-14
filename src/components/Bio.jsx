import React, { Fragment } from "react";
import styled from "styled-components";

const BioContainer = styled.div`
  padding: 4rem 0;
  margin-bottom: 4rem;
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: max-content 1fr;

  @media (max-width: 500px) {
    grid-row-gap: 3rem;
    grid-template-rows: max-content 1fr;
  }

  img {
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
    font-size: 16px;
    line-height: 1.6;
  }

  h2 {
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
        <img src="https://picsum.photos/200" alt="profile" />
        <div className="biotext">
          <h2>The Wirescript</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam cumque
            sint, necessitatibus molestias reprehenderit in corrupti nostrum
            voluptate nesciunt odit, quas neque praesentium quod quo sunt, fugit
            accusantium eius possimus!
          </p>
        </div>
      </BioContainer>
    </Fragment>
  );
};

export default Bio;

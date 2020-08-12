import React, { useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";

import "simplebar/src/simplebar.css";
import SimpleBarReact from "simplebar-react";

import Layout from "./../components/Layout";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

// The code we will be displaying
const code = `
const Validator = require("validator");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  
	if (
		!Validator.isEmpty(data.password) &&
		!Validator.isLength(data.password, { min: 6, max: 30 })
	) {
		errors.password = "Password must be at least 6 chracters";
	}

	return { errors, isValid: isEmpty(errors) };
};
`;

const HeroContainer = styled.div`
  color: var(--color-primary);
  background: var(--color-secondary);
  display: flex;
  padding-top: 4rem;
  padding-bottom: 4rem;
  flex-direction: column;
  justify-content: center;
`;

const HeroTitle = styled.hgroup`
  padding: 2rem 0 4rem 0;
  max-width: 70rem;
  margin: 0 auto;
`;

const BlogTitle = styled.h1`
  color: var(--color-tertiary);
  font-size: clamp(4rem, 7vw, 7rem);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.25;
`;

const BlogDate = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -2.5px;
  margin-top: 3rem;
`;

const BlogContent = styled.article`
  /* Container styles */
  & > * + * {
    margin-top: 2.5rem;
  }

  max-width: 50rem;
  margin: 0 auto;
  text-align: left;
  font-kerning: normal;
  padding: 3rem 0 8rem;

  /* Internal HTML styles */

  h1,
  h2 {
    font-weight: 700;
  }

  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-text-head);
    line-height: 1.3;
    margin: 2rem 0;
  }

  h1 {
    font-size: clamp(2.8rem, 5vw, 3rem);
  }

  h2 {
    font-size: clamp(2.6rem, 4.8vw, 2.8rem);
  }

  h3 {
    font-size: clamp(2.4rem, 4.6vw, 2.6rem);
  }

  h4 {
    font-size: clamp(2.2rem, 4.4vw, 2.4rem);
  }

  h5 {
    font-size: clamp(2rem, 4.2vw, 2.2rem);
  }

  h6 {
    font-size: clamp(1.8rem, 4vw, 2rem);
  }

  p {
    font-size: 1.1rem;
    color: var(--color-text-body);
    line-height: 1.65;
  }

  ol,
  ul {
    color: var(--color-text-body);
    list-style-position: inside;
    list-style-type: disc;
  }

  a,
  a:hover,
  a:active,
  a:focus {
    color: var(--color-text-link);
    text-decoration: none;
  }
`;

const ImageBox = styled.figure`
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0px 10px 25px var(--color-box-shadow);
  }
`;

const Code = ({ code }) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll();
  });

  const CodeBox = styled.div`
    box-shadow: 0px 5px 10px var(--color-box-shadow);
    border-radius: 0.3em;
    font-size: 1rem;

    /* Prism plugins component */
    .toolbar {
      padding: 0.3333rem 1rem 0 0;

      & > .toolbar-item {
        &:not(:last-child) {
          margin-right: 0.3333rem;
        }
      }
    }
  `;

  return (
    <CodeBox>
      <pre className="line-numbers">
        <code className="language-javascript">{code}</code>
      </pre>
    </CodeBox>
  );
};

function one() {
  return (
    <SimpleBarReact style={{ maxHeight: "100vh" }}>
      <main>
        <Layout as="header">
          <Navbar />
          <HeroContainer>
            <HeroTitle>
              <BlogTitle>How to get started with React?</BlogTitle>
              <BlogDate>May 26, 2020</BlogDate>
            </HeroTitle>
          </HeroContainer>
        </Layout>
        <Layout bgColor="var(--color-white)">
          <BlogContent>
            <h1>This is a Heading 1</h1>
            <h2>This is a Heading 2</h2>
            <h3>This is a Heading 3</h3>
            <h4>This is a Heading 4</h4>
            <h5>This is a Heading 5</h5>
            <h6>This is a Heading 6</h6>
            <p>
              Raw API logs only contain the information pertaining to execute a
              single action. Usually the HTTP headers, IP address, request body,
              and other information is logged for later analysis. Monitoring can
              be added by purchasing a license for Elasticsearch X-Pack. The
              issue is that security incidents cannot always be detected by
              looking at API calls in isolation. Instead, hackers are able to
              perform elaborate behavioral flows that exercise your API in an
              unintended way.
            </p>
            <Code code={"console.log('Hello World');"} />
            <p>
              In order to convert this to a user-centric model, we need to tag
              each event with user identifying information such as a tenant id,
              a user id, or similar. Because the majority of APIs are secured by
              some sort of OAuth or API Key, it's fairly easy to map the API key
              to a permanent identifier like user id either directly or by
              maintaining this mapping in a key/value store like Redis.
            </p>
            <p>
              In order to convert this to a user-centric model, we need to tag
              each event with user identifying information such as a tenant id,
              a user id, or similar. Because the majority of APIs are secured by
              some sort of OAuth or API Key, it's fairly easy to map the API key
              to a permanent identifier like user id either directly or by
              maintaining this mapping in a key/value store like Redis.
            </p>
            <p>
              In order to convert this to a user-centric model, we need to tag
              each event with user identifying information such as a tenant id,
              a user id, or similar. Because the majority of APIs are secured by
              some sort of OAuth or API Key, it's fairly easy to map the API key
              to a permanent identifier like user id either directly or by
              maintaining this mapping in a key/value store like Redis.
            </p>
            <p>
              In order to convert this to a user-centric model, we need to tag
              each event with user identifying information such as a tenant id,
              a user id, or similar. Because the majority of APIs are secured by
              some sort of OAuth or API Key, it's fairly easy to map the API key
              to a permanent identifier like user id either directly or by
              maintaining this mapping in a key/value store like Redis.
            </p>
            <h1>How long to retain API logs for API security?</h1>
            <p>
              Now that we have reorganized our API data to be user centric, it
              becomes far easier to identify bad actors from good users, whether
              through visual inspection, static alert rules, or advanced anomaly
              detection.
            </p>
            <Code code={code} />
            <p>
              Treat your API data like your database backups in that you never
              know when you might need them and should regularly test your
              system to ensure the right data is captured. Most security experts
              recommend retaining API logs for at least a year. Naive decision
              making places too much emphasis on reducing storage and compute
              cost without considering how much risk he or she is subjecting
              their company to.
            </p>
            <p>
              In addition since you already tied all API logs to individual
              users, handling GDPR requests such as right to erasure or right to
              access is a breeze.
            </p>
            <ImageBox>
              <img
                src="https://images.unsplash.com/photo-1467779009031-53938b78ca38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="Via Unsplash"
              />
            </ImageBox>
            <h2>Detecting API security vulnerabilities</h2>
            <p>
              Unlike API logs for debugging purposes, these entities should be
              stored for at lest a year since most breach studies demonstrate
              the time to detect a data breach is over 200 days. If you're only
              retaining your API data for a couple of days or weeks to keep cost
              down, then you lose access to valuable forensics data needed for
              auditing and postmortem review.
            </p>
            <h4>Things that I love:</h4>
            <ul>
              <li>Coffee</li>
              <li>Black tea</li>
              <li>Green tea</li>
              <li>Milk</li>
            </ul>
            <h3>Things that I love, but in ordered list:</h3>
            <ol>
              <li>Mango</li>
              <li>Orange</li>
              <li>Coconut</li>
              <li>Strawberry</li>
            </ol>
          </BlogContent>
        </Layout>
        <Footer bgColor="var(--color-white)" />
      </main>
    </SimpleBarReact>
  );
}

export default one;

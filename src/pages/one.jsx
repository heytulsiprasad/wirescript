import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "./../components/Layout";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

const HeroContainer = styled.div`
  color: var(--color-primary);
  background: var(--color-secondary);
  display: flex;
  padding-top: 4rem;
  padding-bottom: 4rem;
  flex-direction: column;
  justify-content: center;
`;

const HeroTitle = styled.div`
  padding: 4rem 0;
  max-width: 70rem;
  margin: 0 auto;
`;

const BlogTitle = styled.h1`
  color: var(--color-tertiary);
  font-size: 10vh;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 110px;
`;

const BlogDate = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -2.5px;
  margin-top: 3rem;
`;

const BlogContent = styled.div`
  /* Container styles */
  max-width: 50rem;
  margin: 0 auto;
  text-align: left;

  & > * + * {
    margin-top: 2rem;
  }

  font-size: 1.1rem;
  padding: 5rem 0;

  /* Internal HTML styles */

  h1,
  h2 {
    color: var(--color-text-head);
  }

  h3,
  h4,
  h5,
  h6 {
    color: var(--color-text-head-lower);
  }

  p {
    color: var(--color-text-body);
  }

  a,
  a:hover,
  a:active,
  a:focus {
    color: var(--color-text-link);
    text-decoration: none;
  }
`;

function one() {
  return (
    <Fragment>
      <Layout>
        <Navbar />
        <HeroContainer>
          <HeroTitle>
            {/* <BlogTitle>Introducing Rekishi.</BlogTitle> */}
            <BlogTitle>
              What is hoisting but from a beginners perspective, not in any
              other language but in JavaScript?
            </BlogTitle>
            <BlogDate>May 26, 2020</BlogDate>
          </HeroTitle>
        </HeroContainer>
      </Layout>
      <Layout bgColor="var(--color-white)">
        <BlogContent>
          <h1>Why API logging is a naive approach to API security?</h1>
          <p>
            Raw API logs only contain the information pertaining to execute a
            single action. Usually the HTTP headers, IP address, request body,
            and other information is logged for later analysis. Monitoring can
            be added by purchasing a license for Elasticsearch X-Pack. The issue
            is that security incidents cannot always be detected by looking at
            API calls in isolation. Instead, hackers are able to perform
            elaborate behavioral flows that exercise your API in an unintended
            way.
          </p>
          <p>
            In order to convert this to a user-centric model, we need to tag
            each event with user identifying information such as a tenant id, a
            user id, or similar. Because the majority of APIs are secured by
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
          <p>
            Treat your API data like your database backups in that you never
            know when you might need them and should regularly test your system
            to ensure the right data is captured. Most security experts
            recommend retaining API logs for at least a year. Naive decision
            making places too much emphasis on reducing storage and compute cost
            without considering how much risk he or she is subjecting their
            company to.
          </p>
          <p>
            In addition since you already tied all API logs to individual users,
            handling GDPR requests such as right to erasure or right to access
            is a breeze.
          </p>
          <h2>Detecting API security vulnerabilities</h2>
          <p>
            Unlike API logs for debugging purposes, these entities should be
            stored for at lest a year since most breach studies demonstrate the
            time to detect a data breach is over 200 days. If you're only
            retaining your API data for a couple of days or weeks to keep cost
            down, then you lose access to valuable forensics data needed for
            auditing and postmortem review.
          </p>
        </BlogContent>
      </Layout>
      <Footer bgColor="var(--color-white)" />
    </Fragment>
  );
}

export default one;

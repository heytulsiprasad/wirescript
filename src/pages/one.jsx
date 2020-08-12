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
  display: flex;
  padding: 4rem 2rem;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    padding: 4rem 1rem;
  }
`;

const HeroTitle = styled.hgroup`
  padding: 2rem 0 4rem 0;
  max-width: 70rem;
  margin: 0 auto;
`;

const BlogTitle = styled.h1`
  color: var(--color-tertiary);
  font-size: clamp(4rem, 6vw, 6.5rem);
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
    margin-top: 2rem;
  }

  font-family: var(--font-body);
  max-width: 45rem;
  margin: 0 auto;
  text-align: left;
  font-kerning: normal;
  padding: 3rem 0 8rem;
  color: #000;

  /* Internal HTML styles */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 3rem;
  }

  h1 {
    font-size: 1.875rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.625rem;
  }

  p {
    line-height: 1.75;
    font-size: 1rem;
    font-weight: 400;
    color: #000;
  }

  ol,
  ul {
    list-style-position: inside;
    list-style-type: disc;
  }

  a,
  a:hover,
  a:active,
  a:focus {
    color: inherit;
    font-weight: 700;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }
`;

const ImageBox = styled.figure`
  padding: 1rem 0;

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
    <div style={{ padding: "1rem 0" }}>
      <CodeBox>
        <pre className="line-numbers">
          <code className="language-javascript">{code}</code>
        </pre>
      </CodeBox>
    </div>
  );
};

function one() {
  return (
    <SimpleBarReact style={{ maxHeight: "100vh" }}>
      <main>
        <Navbar />
        <Layout as="header" bgColor="#f8f8f7">
          <HeroContainer>
            <HeroTitle>
              <BlogTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                animi sunt reprehenderit saepe?
              </BlogTitle>
              <BlogDate>May 26, 2020</BlogDate>
            </HeroTitle>
          </HeroContainer>
        </Layout>
        <Layout bgColor="var(--color-white)">
          <BlogContent>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              nemo!
            </h1>
            <p>
              Lorem <a href="#">ipsum</a> dolor sit amet consectetur adipisicing
              elit. Corporis vero maxime eligendi veritatis quam autem?
              Perspiciatis obcaecati officiis enim soluta, temporibus architecto
              amet provident sint placeat facere, exercitationem dignissimos
              esse totam, tenetur laudantium atque vel suscipit aperiam deleniti
              at illo. Molestias quos laborum porro sunt voluptates voluptatum
              doloremque dolore similique?
            </p>
            <Code code={"console.log('Hello World');"} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium rem ab incidunt placeat similique consequuntur commodi
              sint deserunt porro laboriosam nesciunt ullam culpa ipsa facere
              labore amet pariatur harum, sunt <a href="#">dolorem</a>{" "}
              voluptates numquam. Incidunt at quae et ipsam possimus aspernatur
              modi in accusantium beatae, impedit temporibus id quasi quidem
              rem!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quos,
              harum quasi incidunt fugit nam, iusto recusandae quam error maxime
              blanditiis omnis accusamus atque dolorum excepturi molestias? Et
              dolor officiis enim accusantium blanditiis magnam consectetur
              quae, praesentium vel sunt atque.
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              sit sed tenetur eligendi delectus magni alias unde ipsam beatae
              veniam facere iure nesciunt quasi laborum similique harum nulla
              cupiditate minima?
            </p>
          </BlogContent>
        </Layout>
        <Footer bgColor="var(--color-white)" />
      </main>
    </SimpleBarReact>
  );
}

export default one;

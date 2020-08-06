import React from "react";
import styled from "styled-components";

const FooterParent = styled.div`
  background-color: #f8f8f7;
  display: grid;
  grid-template-rows: repeat(12, minmax(75px, 1fr));
  grid-template-columns: repeat(8, minmax(100px, 1fr));
`;

const FooterNewsletter = styled.div`
  grid-row: 2 / span 6;
  grid-column: 3 / -1;
  background-color: #659d89;
  z-index: 2;
`;

const FooterActual = styled.div`
  grid-row: 7 / -1;
  grid-column: 1 / -1;
  background-color: black;
`;

const NewsletterTitle = styled.h1`
  color: #000;
  padding: 4rem 5rem 0;
  font-weight: 500;

  span {
    color: #f7f7f8;
    margin-left: 0.25rem;
  }
`;

const BigText = styled.h1`
  color: #f7f7f8;
  padding: 1rem 5rem 0;
  font-weight: 700;
  font-size: 14vh;

  span {
    color: #000;
  }
`;

const SmallText = styled.h1`
  color: #f7f7f8;
  padding: 0 5rem;
  margin-left: 5px;
  font-weight: 500;
  font-size: 1rem;
  span {
    color: #000;
  }
`;

const TextBox = styled.input`
  outline: none;
  padding: 1.2rem 1rem 1.2rem 1rem;
  border-radius: 2px;
  border: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: ${props => `${props.length}rem`};

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;

const NewsletterSubscribe = styled.div`
  padding: 2rem 5rem 3rem;
`;

function Footer() {
  return (
    <FooterParent>
      <FooterNewsletter>
        <NewsletterTitle>
          Wirescript <span>Newsletter —</span>
        </NewsletterTitle>
        <SmallText>
          Every Friday, <span>loaded with content</span>
        </SmallText>
        <BigText>
          Get <span>In Mail</span>
        </BigText>
        <NewsletterSubscribe as="form">
          <TextBox type="text" placeholder="Your name" length={15} />
          <TextBox type="email" placeholder="Your email address" length={20} />
          <TextBox type="submit" bgColor="#000" color="#f7f7f8" length={8} />
        </NewsletterSubscribe>
      </FooterNewsletter>
      <FooterActual />
    </FooterParent>
  );
}

export default Footer;

import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  font-weight: 500;
  padding-top: 3.5rem;

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, minmax(40px, 1fr));
    padding-top: 2rem;
  }
`;

const LinkReset = styled(Link)`
  &,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`;

const NavItem = styled(LinkReset)`
  &:not(:last-of-type) {
    margin-right: 3rem;
  }

  @media (max-width: 500px) {
    display: block;
    grid-row: 2 / 3;
    align-self: center;
    margin: 0 auto;
    font-weight: 500;

    &:not(:last-of-type) {
      margin: 0 auto;
    }
  }
`;

const NavItemMain = styled(LinkReset)`
  margin-right: auto;
  margin-left: 0.3333rem;

  && {
    color: var(--color-tertiary);
  }

  @media (max-width: 500px) {
    grid-column: 1 / -1;
    align-self: center;
    margin: 0 auto;
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: 700;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavItemMain to="/">The Wirescript</NavItemMain>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/one">I'm Feeling Lucky</NavItem>
      <NavItem to="/about">About</NavItem>
    </Nav>
  );
}

export default Navbar;

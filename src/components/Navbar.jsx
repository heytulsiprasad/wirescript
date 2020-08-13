import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "./Layout";
import Icon from "./../images/logo";

const Nav = styled.nav`
  display: flex;
  font-weight: 500;
  padding: 1vw 0;
  align-items: center;

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
    text-decoration: none;
  }
`;

const NavItem = styled(LinkReset)`
  color: white;

  &:not(:last-of-type) {
    margin-right: 3rem;
  }

  @media (max-width: 500px) {
    grid-row: 2 / 3;
    justify-self: center;

    &:not(:last-of-type) {
      margin-right: 0;
    }
  }
`;

const NavItemMain = styled(LinkReset)`
  color: white;

  margin-right: auto;
  margin-left: 0.3333rem;

  @media (max-width: 500px) {
    grid-column: 1 / -1;
    align-self: center;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;

function Navbar() {
  return (
    <Layout bgColor="#232323">
      <Nav>
        <NavItemMain to="/">
          <Icon color="#fff" height="3rem" width="3rem" />
        </NavItemMain>
        <NavItem to="/blog">Blog</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/about">Newsletter</NavItem>
      </Nav>
    </Layout>
  );
}

export default Navbar;

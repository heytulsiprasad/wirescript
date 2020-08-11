import React from "react";
import styled from "styled-components";

const ParentParentLayout = styled.div`
  background-color: ${props => props.bgColor};
`;

const ParentLayout = styled.div`
  width: 100%;
  max-width: 105.3333rem;
  margin: 0 auto;
  padding: 0 10.6667rem;
  background-color: ${props => props.bgColor};

  @media (max-width: 1250px) {
    padding: 0 8rem;
  }

  @media (max-width: 900px) {
    padding: 0 5rem;
  }

  @media (max-width: 700px) {
    padding: 0 3rem;
  }

  @media (max-width: 500px) {
    padding: 0 1.5rem;
  }
`;

function Layout({ children, bgColor }) {
  return (
    <ParentParentLayout bgColor={bgColor ? bgColor : "var(--color-secondary)"}>
      <ParentLayout>{children}</ParentLayout>
    </ParentParentLayout>
  );
}

export default Layout;

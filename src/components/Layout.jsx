import React from "react";
import styled from "styled-components";

const ParentLayout = styled.div`
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
  padding: 0 160px;
  background-color: #f8f8f7;
`;

function Layout({ children }) {
  return <ParentLayout>{children}</ParentLayout>;
}

export default Layout;

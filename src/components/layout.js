import React from "react";
import styled from "styled-components";
import Sidebar from "./sidebar";
import GlobalStyle from "../assets/styles/GlobalStyles";

const Main = styled.main`
  padding: 7em 5em 3em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <Sidebar />
        <Main>{children}</Main>
      </Grid>
    </>
  );
}

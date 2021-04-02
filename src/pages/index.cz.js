import React from "react";
import styled from "styled-components";
import GlobalStyle from "../assets/styles/GlobalStyles";
import AnimatedTitle from "../components/animated-title";
import MinorityName from "../components/minority-name";

const minorityGroups = [
  { pl: { name: "Niemcy" }, cz: { name: "Němci" } },
  { pl: { name: "Romowie" }, cz: { name: "Romové" } },
  {
    pl: { name: "Polacy", localization: "w Czechach" },
    cz: { name: "Poláci", localization: "v Česku" },
  },
  {
    pl: { name: "Czesi", localization: "w Polsce" },
    cz: { name: "Češi", localization: "v Polsku" },
  },
  { pl: { name: "Ukraińcy" }, cz: { name: "Ukrajinci" } },
  { pl: { name: "Wietnamczycy" }, cz: { name: "Vietnamci" } },
  { pl: { name: "Żydzi" }, cz: { name: "Židé" } },
];

const Intro = styled.div`
  font-family: "Plex", sans-serif;
  color: #1a1a1a;
  text-align: center;
`;

const NavigationList = styled.ul`
  max-width: 450px;
  margin: 0 auto;
  padding: 0 1em;
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 0 0 50%;
  }

  li:last-child {
    flex: 0 0 100%;
  }
`;

// const minorityGroups = ["Niemcy", "Romowie"];
// const groupNamesFull = [
//   { pl: "Niemcy", cz: "Němci" },
//   { pl: "Romowie", cz: "Romové" },
//   { pl: "Polacy w Czechach", cz: "Poláci v Česku" },
//   { pl: "Czesi w Polsce", cz: "Češi v Polsku" },
//   { pl: "Ukraińcy", cz: "Ukrajinci" },
//   { pl: "Wietnamczycy", cz: "Vietnamci" },
//   { pl: "Żydzi", cz: "" },
// ];

const IntroPage = () => (
  <>
    <GlobalStyle />
    <Intro>
      <AnimatedTitle title="My - menšiny" />
      <nav>
        <NavigationList>
          {minorityGroups.map((minority, index) => (
            <li key={index}>
              <MinorityName minority={minority} />
            </li>
          ))}
        </NavigationList>
      </nav>
    </Intro>
  </>
);

export default IntroPage;

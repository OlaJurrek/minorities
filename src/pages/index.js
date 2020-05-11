import React from "react";
import styled from "styled-components";
import GlobalStyle from "../assets/styles/GlobalStyles";
import AnimatedTitle from "../components/animated-title";
import MinorityName from "../components/minority-name";

const minorityGroups = [
  { name: "Niemcy" },
  { name: "Romowie" },
  { name: "Polacy", localization: "w Czechach" },
  { name: "Czesi", localization: "w Polsce" },
  { name: "Ukraińcy" },
  { name: "Wietnamczycy" },
  { name: "Żydzi" },
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
      <AnimatedTitle />
      <nav>
        <NavigationList>
          {minorityGroups.map((minority, index) => (
            <li key={index}>
              <MinorityName name={minority.name} />
            </li>
          ))}
        </NavigationList>
      </nav>
    </Intro>
  </>
);

export default IntroPage;

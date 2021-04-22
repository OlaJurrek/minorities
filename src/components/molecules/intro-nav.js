import React from 'react';
import styled from 'styled-components';
import MinorityName from '../atoms/minority-name';

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

const IntroNavigation = ({ minorities, currentLang }) => {
  const allMinorities = minorities.map(page => {
    return {
      name: page.node.frontmatter.title,
      slug: page.node.fields.slug,
      lang: page.node.fields.lang,
      path: page.node.frontmatter.path,
    };
  });
  const currentLangMinorities = allMinorities.filter(
    obj => obj.lang === currentLang
  );

  const translatedMinorities = currentLangMinorities.map(minority => {
    for (let item of allMinorities) {
      if (minority.path === item.path && minority.lang !== item.lang) {
        minority.translation = item.name;
      }
    }
    return minority;
  });

  return (
    <nav>
      <NavigationList>
        {translatedMinorities.map((minority, index) => (
          <li key={index}>
            <MinorityName minority={minority} />
          </li>
        ))}
      </NavigationList>
    </nav>
  );
};

export default IntroNavigation;

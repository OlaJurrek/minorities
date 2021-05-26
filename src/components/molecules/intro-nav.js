import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import MinorityName from '../atoms/minority-name';

const StyledNav = styled.nav`
  @media screen and (min-width: 576px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
`;

const NavigationList = styled.ul`
  max-width: 450px;
  margin: 0 auto;
  padding: 0 1em;
  display: flex;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.sm`
      display: block;
      max-width: none;
  `}
`;

const NavigationListItem = styled.li`
  flex: 0 0 50%;

  ${({ theme }) => theme.media.sm`
      position: absolute;
  `}

  :nth-child(1) {
    top: 17vh;
    left: 22vw;
  }

  :nth-child(2) {
    top: 8vh;
    left: 49vw;
  }

  :nth-child(3) {
    top: 17vh;
    left: 75vw;
  }

  :nth-child(4) {
    top: calc(50vh - 30px);
    left: 79vw;
  }

  :nth-child(5) {
    bottom: 15vh;
    left: 69vw;
  }

  :nth-child(6) {
    bottom: 15vh;
    left: 28vw;
  }

  :nth-child(7) {
    top: calc(50vh - 30px);
    right: 79vw;
    flex: 0 0 100%;
  }
`;

const IntroNavigation = ({ minorities, currentLang }) => {
  const wrapper = useRef(null);

  const allMinorities = minorities.map(({ node: { fields, frontmatter } }) => {
    return {
      name: frontmatter.title,
      addition: frontmatter.titleAddition,
      slug: fields.slug,
      lang: fields.lang,
      path: frontmatter.path,
    };
  });

  const currentLangMinorities = allMinorities.filter(
    obj => obj.lang === currentLang
  );

  const translatedMinorities = currentLangMinorities.map(minority => {
    for (let item of allMinorities) {
      if (minority.path === item.path && minority.lang !== item.lang) {
        minority.translatedName = item.name;
        minority.translatedAddition = item.addition;
      }
    }
    return minority;
  });

  translatedMinorities.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const listItems = wrapper.current.children;

    gsap.set([listItems], {
      autoAlpha: 0,
    });

    gsap.to(listItems, {
      autoAlpha: 1,
      delay: 1,
      duration: 4,
      ease: 'power4.inOut',
      stagger: 0.3,
    });
  }, []);

  return (
    <StyledNav>
      <NavigationList ref={wrapper}>
        {translatedMinorities.map((minority, index) => (
          <NavigationListItem key={index}>
            <MinorityName minority={minority} />
          </NavigationListItem>
        ))}
      </NavigationList>
    </StyledNav>
  );
};

export default IntroNavigation;

import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import gsap from 'gsap';

const TitleWrapper = styled.h1`
  --width: 85;
  --weight: 600;
  position: relative;
  z-index: 3;
  margin: 0 0 0.4em;
  font-size: 2.4em;
  font-weight: 300;
  font-variation-settings: 'wght' var(--weight), 'wdth' var(--width);
  text-transform: uppercase;

  ${({ theme }) => theme.media.sm`
    margin: 0;
  `}

  span {
    display: inline-block;
  }
`;

const AnimatedTitle = ({ link }) => {
  const { t } = useTranslation();
  const title = t('mainTitle').toUpperCase().split('');
  const m = title[0];
  const y = title[title.length - 1];
  const middle = title.slice(1, title.length - 1).join('');
  const titleRef = useRef(null);
  const wrapper = useRef(null);

  useEffect(() => {
    const [mRef, middleRef, yRef] = titleRef.current.children;
    const wrapperRef = wrapper.current;

    gsap.set([mRef, yRef], {
      autoAlpha: 0,
    });

    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

    tl.fromTo(
      mRef,
      { transform: 'translate3d(90px,-300px,0)' },
      { duration: 3, transform: 'translate3d(90px,-50%,0)', autoAlpha: 1 }
    )
      .fromTo(
        yRef,
        { transform: 'translate3d(-90px,-300px,0)' },
        { duration: 3, transform: 'translate3d(-90px,-50%,0)', autoAlpha: 1 },
        '-=2.5'
      )
      .fromTo(mRef, {}, { duration: 1.3, x: 0 }, '-=1')
      .fromTo(yRef, {}, { duration: 1.3, x: 0 }, '-=0.8')
      .fromTo(middleRef, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 })
      .fromTo(
        wrapperRef,
        { '--weight': 600, '--width': 85 },
        { duration: 2, '--weight': 350, '--width': 100 },
        '-=1.5'
      );
  }, []);

  return (
    <TitleWrapper ref={wrapper}>
      <Link to={link}>
        <div ref={titleRef}>
          <span>{m}</span>
          <span>{middle}</span>
          <span>{y}</span>
        </div>
      </Link>
    </TitleWrapper>
  );
};

export default AnimatedTitle;

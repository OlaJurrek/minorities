import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { gsap } from "gsap";

const FullName = styled.p`
  display: flex;
  justify-content: center;
  margin: 1.2em 0;
  text-align: center;
  color: #1a1a1a;
`;

const HalfName = styled.span`
  position: relative;
  display: flex;
  overflow: hidden;
`;

const HalfNameContent = styled.span`
  display: inline-block;
`;

const HalfNameContentSecondary = styled.span`
  display: inline-block;
  position: absolute;
`;

const MinorityName = ({ minority }) => {
  const [mouseAnimation, setMouseAnimation] = useState();
  const [tl] = useState(gsap.timeline({ paused: true }));

  const getLastHalf = name => name.slice(Math.floor(name.length / 2));
  const getFirstHalf = name => name.slice(0, Math.floor(name.length / 2));
  const polishName = minority.pl.name;
  const czechName = minority.cz.name;
  const firstHalf = getFirstHalf(polishName);
  const lastHalf = getLastHalf(polishName);
  const firstHalfCZ = getFirstHalf(czechName);
  const lastHalfCZ = getLastHalf(czechName);

  const firstHalfRef = useRef(null);
  const firstHalfTween = useRef(null);
  const lastHalfRef = useRef(null);
  const lastHalfTween = useRef(null);

  const firstHalfRefCZ = useRef(null);
  const lastHalfRefCZ = useRef(null);

  useEffect(() => {
    // gsap.set(firstHalfRefCZ.current, {
    //   x: `+=${firstHalfRef.current.clientWidth}`,
    // });
    // gsap.set(lastHalfRefCZ.current, { x: "-=100%" });

    setMouseAnimation(
      tl.to(firstHalfRef.current, {
        duration: 0.5,
        x: "+=100%",
        paused: true,
      })
    );

    // firstHalfTween.current = tl.to(firstHalfRef.curent, {
    //   duration: 0.5,
    //   x: "+=100%",
    //   paused: true,
    // });

    // lastHalfTween.current = gsap.to(lastHalfRef.current, {
    //   duration: 0.5,
    //   x: "-=100%",
    //   paused: true,
    // });
  }, [tl]);

  const onMouseEnterHandler = () => {
    mouseAnimation.play();
    console.log(mouseAnimation);
    // firstHalfTween.current.play();
    // lastHalfTween.current.play();
  };
  const onMouseLeaveHandler = () => {
    // firstHalfTween.current.reverse();
    // lastHalfTween.current.reverse();
  };

  return (
    <Link to="/">
      <FullName
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        // onMouseEnter={() => mouseAnimation.play()}
        // onMouseLeave={() => mouseAnimation.reverse()}
      >
        <HalfName>
          <HalfNameContent ref={firstHalfRef}>{firstHalf}</HalfNameContent>
          {/* <HalfNameContentSecondary ref={firstHalfRefCZ}>
            {firstHalfCZ}
          </HalfNameContentSecondary> */}
        </HalfName>
        <HalfName>
          <HalfNameContent ref={lastHalfRef}>{lastHalf}</HalfNameContent>
          {/* <HalfNameContentSecondary ref={lastHalfRefCZ}>
            {lastHalfCZ}
          </HalfNameContentSecondary> */}
        </HalfName>
      </FullName>
    </Link>
  );
};
export default MinorityName;

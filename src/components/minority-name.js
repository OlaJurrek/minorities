import React, { useRef, useEffect } from "react";
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

const MinorityName = ({ name }) => {
  const firstHalf = name.slice(0, Math.floor(name.length / 2));
  const lastHalf = name.slice(Math.floor(name.length / 2));

  const firstHalfRef = useRef(null);
  const firstHalfTween = useRef(null);
  const lastHalfRef = useRef(null);
  const lastHalfTween = useRef(null);

  // const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

  useEffect(() => {
    firstHalfTween.current = gsap.to(firstHalfRef.current, {
      duration: 0.5,
      x: "+=100%",
      paused: true,
    });
    lastHalfTween.current = gsap.to(lastHalfRef.current, {
      duration: 0.5,
      x: "-=100%",
      paused: true,
    });
  }, []);

  const onMouseEnterHandler = () => {
    firstHalfTween.current.play();
    lastHalfTween.current.play();
  };
  const onMouseLeaveHandler = () => {
    firstHalfTween.current.reverse();
    lastHalfTween.current.reverse();
  };

  return (
    <Link
      to="/"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <FullName>
        <HalfName>
          <HalfNameContent ref={firstHalfRef}>{firstHalf}</HalfNameContent>
        </HalfName>
        <HalfName>
          <HalfNameContent ref={lastHalfRef}>{lastHalf}</HalfNameContent>
        </HalfName>
      </FullName>
    </Link>
  );
};
export default MinorityName;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import ActiveMarker from "./active-marker";
import colors from "../assets/styles/colors";

const Aside = styled.aside`
  background-color: ${colors.lightGrey};
  font-family: "Plex", sans-serif;

  .nav-header-wrapper {
    padding: 2.625em 0;
    text-align: center;
    background-color: ${colors.dark};
  }

  .nav-header {
    font-size: 1.8em;
    font-weight: 200;
    font-variation-settings: "wght" 200;
    letter-spacing: 1px;
    text-transform: uppercase;
    // border-right: solid 1.5px ${colors.white};
    // margin-right: 1.8rem;
  }

  .white-text {
    color: ${colors.white};
  }
`;

const MenuList = styled.ul`
  position: relative;
  margin: 0;
  font-variation-settings: "wght" 380;

  li {
    div {
      display: inline-block;
      max-width: 12em;
      margin-left: 2em;
      padding: 0.5em 1em 0.5em 1.8em;
      border-left: solid 1.5px ${colors.dark};
    }
  }

  li.white-text {
    background-color: ${colors.dark};

    div {
      border-left: solid 1.5px ${colors.lightGrey};
    }
  }

  a {
    display: inline-block;
  }
`;

export default function Sidebar() {
  const [activeElementOffset, setActiveElementOffset] = useState(0);
  const [offset, setOffset] = useState(activeElementOffset);

  const handleMouseEnter = e => {
    setOffset(e.target.offsetTop);
  };

  const handleMouseLeave = e => {
    setOffset(activeElementOffset);
  };

  useEffect(() => {
    const activeLink = document.getElementsByClassName("active");

    if (activeLink.length) {
      setActiveElementOffset(activeLink[0].offsetTop);
    }
  }, []);

  return (
    <Aside>
      <nav>
        <div className="nav-header-wrapper">
          <Link to="/" className="nav-header white-text">
            My - menšiny
          </Link>
        </div>
        <ActiveMarker offset={offset} />
        <MenuList>
          <li className="white-text">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/about" activeClassName="active">
                O projekcie
              </Link>
            </div>
          </li>
          <li className="white-text">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/article" activeClassName="active">
                O mniejszościach i większościach
              </Link>
            </div>
          </li>
          <li>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/minority" activeClassName="active">
                Czesi w Polsce
              </Link>
            </div>
          </li>
          <li>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/minority">Niemcy</Link>
            </div>
          </li>
          <li>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/minority">Polacy w Czechach</Link>
            </div>
          </li>
          <li>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/romowie">Romowie</Link>
            </div>
          </li>
          <li>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/minority">Ukraińcy</Link>
            </div>
          </li>
          <li>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/wietnamczycy">Wietnamczycy</Link>
            </div>
          </li>
          <li>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/minority">Żydzi</Link>
            </div>
          </li>
        </MenuList>
      </nav>
    </Aside>
  );
}

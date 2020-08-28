import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// import NavLink from "./nav-link";
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
  // z-index: 2;

  li {
    div {
      margin-left: 2em;
      border-left: solid 1.5px ${colors.dark};
      padding: 0.5em 1.8em;
    }
  }

  li.white-text {
    background-color: ${colors.dark};

    div {
      border-left: solid 1.5px ${colors.white};
      // border-right: solid 1.5px ${colors.white};
      // margin-right: 1.8em;
    }
  }

  a.active {
    color: red;
  }

  a {
    display: inline-block;
  }
`;

export default function Sidebar() {
  const [activeElementOffset, setActiveElementOffset] = useState(0);
  const [offset, setOffset] = useState(activeElementOffset);
  // const [markerTheme, setMarkerTheme] = useState()
  const activeElement = useRef(null);

  const isActive = props => {
    return props.isCurrent ? true : false;
  };

  const handleMouseEnter = e => {
    // console.log(e.target.offsetTop + e.target.clientHeight / 2);
    setOffset(e.target.offsetTop);
  };

  const handleMouseLeave = e => {
    setOffset(activeElementOffset);
  };

  const handleClick = e => {
    console.log(this);
  };

  useEffect(() => {
    console.log(activeElement.current);
    console.log("useEffect", activeElement.current.offsetTop);
    setActiveElementOffset(activeElement.current.offsetTop);
  }, []);

  return (
    <Aside>
      <nav>
        <div className="nav-header-wrapper">
          <Link to="/" className="nav-header white-text">
            My - menšiny
          </Link>
        </div>
        <ActiveMarker offset={offset} background={colors.dark} />
        <MenuList>
          <li className="white-text">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/about"
                activeClassName="active"
                ref={activeClassName ? activeElement : null}
                getProps={isActive}
                onClick={handleClick}
              >
                O projekcie
              </Link>
              {/* <NavLink ref={activeElement} /> */}
            </div>
          </li>
          <li className="white-text">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/article"
                activeClassName="active"
                getProps={isActive}
                ref={isActive ? activeElement : null}
              >
                O mniejszościach i większościach
              </Link>
            </div>
          </li>
          <li>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/minority"
                getProps={isActive}
                ref={isActive ? activeElement : null}
              >
                Czesi w Polsce
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link
                to="/minority"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Niemcy
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link
                to="/minority"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Polacy w Czechach
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link
                to="/minority"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Romowie
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link
                to="/minority"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Ukraińcy
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link
                to="/minority"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Wietnamczycy
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link
                to="/minority"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Żydzi
              </Link>
            </div>
          </li>
        </MenuList>
      </nav>
    </Aside>
  );
}

import React from "react";
import styled from "styled-components";
import RotateSpan from "../utils/RotateSpan";

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10rem;
`;

const NavLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    min-width: 10rem;
  }
`;

const NavItem = styled.span`
  cursor: pointer;
  padding: var(--spacing-xs);
`;

const NavMenu = ({ containerRef }) => {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section && containerRef.current) {
      const spacingMediumRem = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--spacing-medium");
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const spacingMediumPx = parseFloat(spacingMediumRem) * rootFontSize;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - spacingMediumPx;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <NavList>
      <NavLink>
        <NavItem onClick={() => handleScrollToSection("introduction")}>
          Introduction
        </NavItem>
        <RotateSpan id="introduction" />
      </NavLink>
      <NavLink>
        <NavItem onClick={() => handleScrollToSection("skills")}>
          Skills
        </NavItem>
        <RotateSpan id="skills" />
      </NavLink>
      <NavLink>
        <NavItem onClick={() => handleScrollToSection("projects")}>
          Projects
        </NavItem>
        <RotateSpan id="projects" />
      </NavLink>
    </NavList>
  );
};

export default NavMenu;

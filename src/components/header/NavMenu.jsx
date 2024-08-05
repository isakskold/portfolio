import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RotateSpan from "../utils/RotateSpan";

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 55%;
  box-sizing: border-box;
  max-width: 100%;
`;

const NavLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
`;

const NavItem = styled.span`
  cursor: pointer;
  padding: var(--spacing-xs);
`;

const HighlightLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: white;
  border-radius: 8px;
`;

const NavMenu = ({ containerRef }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Get all section elements that are direct children of the main element and extract their IDs
    const sectionElements = document.querySelectorAll("main > section[id]");
    const sectionIds = Array.from(sectionElements).map((section) => section.id);
    setSections(sectionIds);
  }, []);

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
      {sections.map((section) => (
        <NavLink key={section}>
          <NavItem onClick={() => handleScrollToSection(section)}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </NavItem>
          <HighlightLine />
          <RotateSpan id={section} context="Nav" />
        </NavLink>
      ))}
    </NavList>
  );
};

export default NavMenu;

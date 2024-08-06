import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RotateSpan from "../utils/RotateSpan";
import useSectionStore from "../../store/useSectionStore";

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
  padding: 0.5rem 0;
  width: 250px;
`;

const NavItem = styled.span`
  cursor: pointer;
  border: white dotted 1px;
  border-radius: var(--border-radius-small);
  padding: var(--spacing-xs);

  &:hover {
    box-shadow: var(--box-shadow-hover);
  }

  transition: box-shadow 0.2s;
`;

const HighlightLine = styled.div`
  flex-grow: 1;
  background-color: ${(props) =>
    props.$isExpanded ? "var(--turquoise-bright)" : "white"};
  height: ${(props) => (props.$isExpanded ? "6px" : "1px")};

  border-radius: 8px;
  margin: var(--spacing-xs);

  opacity: 0.6;

  transition: background-color 0.2s, height 0.2s;
`;

const NavMenu = ({ containerRef }) => {
  const [sections, setSections] = useState([]);
  const expandedSections = useSectionStore((state) => state.expandedSections);

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
          <NavItem
            onClick={() => handleScrollToSection(section)}
            title="Scroll to section"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </NavItem>
          <HighlightLine $isExpanded={expandedSections[section]} />
          <RotateSpan
            id={section}
            context="Nav"
            style={{ fontSize: "1.3rem" }}
            title={
              expandedSections[section] ? "Collapse section" : "Expand section"
            }
          />
        </NavLink>
      ))}
    </NavList>
  );
};

export default NavMenu;

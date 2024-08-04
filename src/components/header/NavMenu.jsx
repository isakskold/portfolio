import React from "react";
import styled from "styled-components";
import useSectionStore from "../../store/useSectionStore";

// Utility function to perform smooth scrolling
const smoothScroll = (target, duration = 600) => {
  const start = window.scrollY;
  const end = target;
  const startTime = performance.now();

  const scroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, start + (end - start) * progress);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavItem = styled.li`
  cursor: pointer;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
`;

const NavMenu = ({ containerRef }) => {
  const { expandedSections, toggleSection } = useSectionStore();

  const handleScrollToSection = (id, behavior = "smooth") => {
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

      if (behavior === "smooth") {
        smoothScroll(sectionTop, 600); // Custom smooth scroll
      } else {
        window.scrollTo({
          top: sectionTop,
          behavior: "auto", // Adjust without animation
        });
      }
    }
  };

  const handleNavItemClick = (id) => {
    // Start the initial smooth scroll
    handleScrollToSection(id, "smooth");

    // Expand the section if it is not already expanded
    if (!expandedSections[id]) {
      toggleSection(id);

      // Adjust the scroll position after the expansion transition completes
      setTimeout(() => {
        handleScrollToSection(id, "auto"); // Adjust scroll without animation
      }, 600); // Wait for the expansion transition to finish
    }
  };

  return (
    <NavList>
      <NavItem onClick={() => handleNavItemClick("introduction")}>
        Introduction
      </NavItem>
      <NavItem onClick={() => handleNavItemClick("skills")}>Skills</NavItem>
      <NavItem onClick={() => handleNavItemClick("projects")}>Projects</NavItem>
    </NavList>
  );
};

export default NavMenu;

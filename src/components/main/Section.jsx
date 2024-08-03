import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// Utility function to convert pixels to rem
const pxToRem = (px) => `${px / 16}rem`;

// Styled components
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(250, 250, 250, 0.06);
  border: 1px solid rgba(250, 250, 250, 0.1);
  box-shadow: ${(props) =>
    props.$expanded ? "var(--box-shadow-expanded)" : "var(--box-shadow)"};

  border-radius: ${(props) => (props.$expanded ? "30px" : "15px")};

  padding: var(--spacing-small);
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: var(--spacing-medium);
  }

  cursor: pointer;
  &:hover {
    box-shadow: var(--box-shadow-hover);
  }

  transition: border-radius 0.6s ease-in-out, box-shadow 0.2s ease-in-out;
`;

const SectionTitle = styled.h2`
  padding: var(--spacing-xs) 0;
  margin-bottom: ${(props) => (props.$expanded ? "var(--spacing-small)" : "0")};
  transition: margin-bottom 0.6s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: inline-block;
    transition: transform 0.6s;
    transform: ${(props) =>
      props.$expanded ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const SectionContentWrapper = styled.div`
  display: grid;
  grid-template-rows: ${(props) => (props.$expanded ? "1fr" : "0.5fr")};
  align-items: start;
  transition: grid-template-rows 0.6s ease-in-out;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    display: ${(props) => (props.$expanded ? "none" : "block")};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(
      to bottom,
      rgba(23, 31, 48, 0),
      rgba(23, 31, 48, 1)
    );
    pointer-events: none;
    transition: opacity 0.6s ease-in-out;
    opacity: ${(props) => (props.$expanded ? 0 : 0.9)};
  }
`;

const SectionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease-in-out;

  /* Disable pointer events for children when not expanded */
  pointer-events: ${(props) => (props.$expanded ? "auto" : "none")};
`;

const Section = ({ title, children, allowOverflow }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleResize = () => {
      if (isExpanded && contentRef.current) {
        setMaxHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <SectionContainer onClick={toggleExpand} $expanded={isExpanded}>
      <SectionTitle $expanded={isExpanded}>
        {title} <span>▼</span>
      </SectionTitle>
      <SectionContentWrapper $expanded={isExpanded}>
        <SectionContent
          style={{
            maxHeight: isExpanded ? `${pxToRem(maxHeight)}` : pxToRem(200),
          }}
          ref={contentRef}
          $expanded={isExpanded}
        >
          {children}
        </SectionContent>
      </SectionContentWrapper>
    </SectionContainer>
  );
};

export default Section;

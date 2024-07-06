import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Styled components
const SectionContainer = styled.section`
  display: flex;
  flex-grow: 1;
  min-height: 10rem;
  flex-direction: column;
  background-color: rgba(250, 250, 250, 0.06);
  box-shadow: var(--box-shadow);
  width: auto;
  border-radius: 50px;
  padding: var(--spacing-small);
  overflow: hidden;
  transition: height 0.4s ease-in-out; /* Transition height for smooth animation */
  height: ${(props) =>
    props.$expanded ? "auto" : "3rem"}; /* Use auto for dynamic height */

  &:not(:last-child) {
    margin-bottom: var(--spacing-large);
  }
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-large);
  padding: var(--spacing-xs) 0;
  margin-bottom: var(--spacing-small);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const SectionContentWrapper = styled.div`
  overflow: hidden;
`;

const SectionContent = styled.div`
  /* Optional: Add styling for SectionContent if needed */
  margin-bottom: var(
    --spacing-small
  ); /* Assuming each child has a bottom margin */
`;

const Section = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState("auto"); // Initialize height as auto for initial state
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Calculate height of content when expanded
    if (contentRef.current && titleRef.current) {
      const titleHeight = titleRef.current.clientHeight;
      const contentHeight = contentRef.current.scrollHeight;
      const marginBottom = parseInt(
        getComputedStyle(contentRef.current).marginBottom,
        10
      );
      setHeight(
        isExpanded ? `${titleHeight + contentHeight + marginBottom}px` : "3rem"
      );
    }
  }, [isExpanded, children]);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <SectionContainer $expanded={isExpanded} style={{ height }}>
      <SectionTitle ref={titleRef} onClick={toggleExpand}>
        {title} <span>{isExpanded ? "▲" : "▼"}</span>
      </SectionTitle>
      <SectionContentWrapper>
        <SectionContent ref={contentRef}>{children}</SectionContent>
      </SectionContentWrapper>
    </SectionContainer>
  );
};

export default Section;

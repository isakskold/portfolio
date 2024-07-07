import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(250, 250, 250, 0.06);
  box-shadow: ${(props) =>
    props.$expanded ? "var(--box-shadow-expanded)" : "var(--box-shadow)"};

  border-radius: 50px;
  padding: var(--spacing-small);
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: var(--spacing-medium);
  }

  cursor: pointer;
  &:hover {
    box-shadow: var(--box-shadow-hover);
  }

  transition: box-shadow 0.2s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-large);
  padding: var(--spacing-xs) 0;
  margin-bottom: ${(props) => (props.$expanded ? "var(--spacing-small)" : "0")};
  transition: margin-bottom 0.6s ease-out;
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
  grid-template-rows: ${(props) => (props.$expanded ? "1fr" : "0fr")};
  transition: grid-template-rows 0.6s ease-out;
`;

const SectionContent = styled.div`
  overflow: hidden;
`;

const Section = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <SectionContainer onClick={toggleExpand} $expanded={isExpanded}>
      <SectionTitle $expanded={isExpanded}>
        {title} <span>▼</span>
      </SectionTitle>
      <SectionContentWrapper $expanded={isExpanded}>
        <SectionContent>{children}</SectionContent>
      </SectionContentWrapper>
    </SectionContainer>
  );
};

export default Section;

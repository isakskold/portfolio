import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(250, 250, 250, 0.06);
  box-shadow: var(--box-shadow);
  width: auto;
  border-radius: 50px;
  padding: var(--spacing-small);
  overflow: hidden;
  height: auto;

  &:not(:last-child) {
    margin-bottom: var(--spacing-medium);
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

  span {
    display: inline-block;
    transition: transform 0.2s;
    transform: ${(props) =>
      props.$expanded ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const SectionContentWrapper = styled.div`
  display: grid;
  grid-template-rows: ${(props) => (props.$expanded ? "1fr" : "0fr")};
  transition: grid-template-rows 0.5s ease-out;
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
    <SectionContainer>
      <SectionTitle onClick={toggleExpand} $expanded={isExpanded}>
        {title} <span>{isExpanded ? "▲" : "▼"}</span>
      </SectionTitle>
      <SectionContentWrapper $expanded={isExpanded}>
        <SectionContent>{children}</SectionContent>
      </SectionContentWrapper>
    </SectionContainer>
  );
};

export default Section;

import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  width: auto;
  border: 1px solid #ccc;
  border-radius: var(--border-radius-small);
  padding: var(--spacing-medium);
  padding: 10rem 0;
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-large);
`;

const SectionContent = styled.div`
  font-size: var(--font-size-small);
`;

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};

export default Section;

import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  margin-bottom: var(--spacing-small);
`;

// Predefined lorem ipsum text
const loremIpsumText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// Function to generate a specified number of words
const getLoremIpsumWords = (wordCount) => {
  return loremIpsumText.split(" ").slice(0, wordCount).join(" ") + ".";
};

const Introduction = () => {
  return (
    <>
      <Paragraph> {getLoremIpsumWords(100)} </Paragraph>
      <Paragraph> {getLoremIpsumWords(100)} </Paragraph>
      <Paragraph> {getLoremIpsumWords(100)} </Paragraph>
      <Paragraph> {getLoremIpsumWords(100)} </Paragraph>
      <Paragraph> {getLoremIpsumWords(100)} </Paragraph>
      <Paragraph> {getLoremIpsumWords(100)} </Paragraph>
    </>
  );
};

export default Introduction;

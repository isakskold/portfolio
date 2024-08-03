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
      <Paragraph>
        {" "}
        Hello! I'm a 25-year-old web development student based in Karlstad,
        Sweden, currently residing in Karlskoga. With a diverse range of
        interests including snowboarding, skiing, skateboarding, disc golf, team
        sports, hiking, and writing music lyrics, I bring a unique perspective
        and creativity to my work.{" "}
      </Paragraph>
      <Paragraph>
        {" "}
        Before diving into web development, I spent five years in the
        construction industry as a ventilation installer. This role required
        adaptability and the ability to work with different teams and standards
        across various locations.{" "}
      </Paragraph>
      <Paragraph>
        {" "}
        For the past two years (2022-2024), I've dedicated myself to studying
        web development, and I'm now entering my second year of school. I am
        passionate about building dynamic and user-friendly web applications and
        am looking forward to applying my skills in a trainee position starting
        in the spring of 2025.{" "}
      </Paragraph>
      <Paragraph>
        {" "}
        As a certified ski instructor (SLAO step 1 and 2), I have honed my
        teaching and leadership abilities, which complement my technical skills.
        I am driven by a strong work ethic and find immense satisfaction in
        delivering high-quality work. I am eager to contribute to exciting web
        development projects and grow as a professional in this field.{" "}
      </Paragraph>
    </>
  );
};

export default Introduction;

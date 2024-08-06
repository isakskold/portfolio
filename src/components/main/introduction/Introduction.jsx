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
        Hi there! I'm a 25-year-old web development student in Karlstad, Sweden,
        currently living in Karlskoga. My hobbies throughout the year include
        snowboarding, skiing, skateboarding, disc golf, team sports, hiking, and
        writing music lyrics. These diverse interests fuel my creativity and
        bring a fresh perspective to my work.{" "}
      </Paragraph>
      <Paragraph>
        {" "}
        Before jumping into web development, I spent five years working in the
        construction industry as a ventilation installer. This job taught me to
        adapt quickly and collaborate effectively with different teams and
        standards across various locations.{" "}
      </Paragraph>
      <Paragraph>
        {" "}
        I've been focusing on web development for the past two years (2022-2024)
        and am now starting my second year of studies. I’m passionate about
        creating engaging and user-friendly web applications and am excited to
        start a trainee position in the spring of 2025 to put my skills into
        practice.{" "}
      </Paragraph>
      <Paragraph>
        {" "}
        In addition to my technical skills, I'm a certified ski instructor (SLAO
        step 1 and 2), which has sharpened my teaching and leadership abilities.
        I’m driven by a strong work ethic and take great pride in delivering
        quality work. I’m looking forward to contributing to exciting web
        development projects and growing as a professional in this field.{" "}
      </Paragraph>
    </>
  );
};

export default Introduction;

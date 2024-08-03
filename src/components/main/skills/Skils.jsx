import React from "react";
import styled from "styled-components";
import SkillsCircle from "./SkillsCircle";

// Example usage of Section and SkillsCircle components
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"];

const SkillsCircleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Skills = () => {
  return (
    <SkillsCircleWrapper>
      <SkillsCircle skills={skills} />
    </SkillsCircleWrapper>
  );
};

export default Skills;

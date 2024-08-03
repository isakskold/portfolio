import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Styled components
const CircleContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px; /* Cap the width */
  aspect-ratio: 1 / 1; /* Ensures a square aspect ratio */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--spacing-small);

  @media (max-width: 600px) {
    aspect-ratio: auto; /* Disable aspect ratio for small screens */
    max-height: 100%; /* Ensure the container doesn’t exceed viewport height */
    flex-direction: column; /* Stack items vertically */
    align-items: flex-start;
  }
`;

const SkillItem = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  @media (max-width: 600px) {
    position: static; /* Remove absolute positioning */
    transform: none; /* Remove transform */
    margin-bottom: 10px; /* Add some space between items */
  }
`;

const SkillsCircle = ({ skills }) => {
  const containerRef = useRef(null);
  const skillRefs = useRef([]);

  const [dimensions, setDimensions] = useState({ radius: 0, center: 0 });

  const updateDimensions = () => {
    if (containerRef.current) {
      const size = containerRef.current.offsetWidth; // assuming the container is a square
      setDimensions({ radius: size / 2 - 10, center: size / 2 }); // 10px margin from the border
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    const skillElements = skillRefs.current;

    if (window.innerWidth > 600) {
      // Only calculate positions if viewport is larger than 600px
      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI;
        const x = dimensions.center + dimensions.radius * Math.cos(angle); // Center + radius * cos(angle)
        const y = dimensions.center + dimensions.radius * Math.sin(angle); // Center + radius * sin(angle)

        if (skillElements[index]) {
          skillElements[index].style.left = `${x}px`;
          skillElements[index].style.top = `${y}px`;
        }
      });
    }
  }, [skills, dimensions]);

  return (
    <CircleContainer ref={containerRef}>
      {skills.map((skill, index) => (
        <SkillItem key={index} ref={(el) => (skillRefs.current[index] = el)}>
          {skill}
        </SkillItem>
      ))}
    </CircleContainer>
  );
};

export default SkillsCircle;

import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "./Logo";

// Keyframes for rotating the entire container
const rotateContainer = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

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
  margin: var(--spacing-xs);

  /* Apply the rotation animation to the entire container */
  animation: ${rotateContainer} 20s linear infinite;

  @media (max-width: 600px) {
    aspect-ratio: auto; /* Disable aspect ratio for small screens */
    max-height: 100%; /* Ensure the container doesn’t exceed viewport height */
    flex-wrap: wrap;
    align-items: flex-start;
    border-radius: 0;
    animation: none; /* Disable animation for small screens */
  }
`;

const SkillItem = styled.div`
  position: absolute;
  width: 50px; /* Adjust width */
  height: 50px; /* Adjust height */

  white-space: nowrap;

  @media (max-width: 600px) {
    position: static; /* Remove absolute positioning */
    transform: none; /* Remove transform */
    margin: var(--spacing-small);
    animation: none;
  }
`;

const SkillsCircle = ({ skills }) => {
  const containerRef = useRef(null);
  const skillRefs = useRef([]);

  const [dimensions, setDimensions] = useState({ radius: 0, center: 0 });

  const updateDimensions = () => {
    if (containerRef.current) {
      const size = containerRef.current.offsetWidth; // assuming the container is a square
      const logoSize = 50; // Logo size
      const boxShadowSpread = 20; // Box shadow spread
      setDimensions({
        radius: size / 2 - logoSize / 2 - boxShadowSpread,
        center: size / 2,
      });
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
          // Correct positioning of the logos
          skillElements[index].style.left = `${x}px`;
          skillElements[index].style.top = `${y}px`;

          // Apply constant rotation to keep items visually stationary
          // Adjust this value as needed to counteract container rotation
          skillElements[
            index
          ].style.transform = `translate(-50%, -50%) rotate(0deg)`;
        }
      });
    } else {
      // Reset transform for smaller screens to ensure consistency with @media styling
      skills.forEach((_, index) => {
        if (skillRefs.current[index]) {
          skillRefs.current[index].style.transform = "none";
        }
      });
    }
  }, [skills, dimensions]);

  return (
    <CircleContainer ref={containerRef}>
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          ref={(el) => (skillRefs.current[index] = el)}
          $index={index}
          $totalItems={skills.length}
        >
          <Logo src={skill.src} name={skill.name} />
        </SkillItem>
      ))}
    </CircleContainer>
  );
};

export default SkillsCircle;

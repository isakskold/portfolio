import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import profilePicture from "../../images/profilePictureCutout.png";

const colors = [
  "var(--orange)",
  "var(--turquoise)",
  "var(--turquoise-bright)",
  "var(--tomato-red)",
];

// Function to get the next color in sequence from the colors array
const getNextColor = (lastColor) => {
  const lastIndex = colors.indexOf(lastColor);
  const nextIndex = lastIndex === colors.length - 1 ? 0 : lastIndex + 1;
  return colors[nextIndex];
};

const pulsate = (color) => keyframes`
  0% {
    box-shadow: 0 0 6px ${color}; /* Start at 6px */
  }
  25% {
    box-shadow: 0 0 16px ${color}; /* Peak at 16px (weaker peak) */
  }
  50% {
    box-shadow: 0 0 32px ${color}; /* Peak at 32px */
  }
  75% {
    box-shadow: 0 0 16px ${color}; /* Return to 16px */
  }
  100% {
    box-shadow: 0 0 6px ${color}; /* Ensure it ends at 6px */
  }
`;

const ImageContainer = styled.div`
  position: relative; /* Ensure the pseudo-element is positioned relative to this container */
  height: 15rem; /* Set height and width to create a square */
  width: 15rem; /* Set height and width to create a square */
  overflow: hidden; /* Ensure the pulsating box shadow is visible */
  border-radius: 30px; /* Make the container a circle */
  padding: 5px; /* Space for the gradient border */
  margin: var(--spacing-medium) 0; /* Center the container horizontally */
  min-height: 75px; /* Set minimum height */
  min-width: 75px; /* Set minimum width */
  z-index: 10; /* Ensure it is on top of other elements */
  animation: ${({ color }) => pulsate(color)} 2s infinite linear; /* Apply the animation with linear timing */

  @media (max-height: 220px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px; /* Match the container's border radius */
    background: linear-gradient(
      45deg,
      var(--bright-blue),
      var(--orange),
      var(--turquoise),
      var(--turquoise-bright),
      var(--tomato-red)
    ); /* Gradient colors */
    opacity: 0.37; /* Desired opacity */
    z-index: -1; /* Ensure it is behind the content */
  }

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: var(
      --primary-color
    ); /* Background color for the inner container */
    border-radius: 25px; /* Inner border radius slightly smaller */
    z-index: -2; /* Ensure it is behind the pseudo-element */
  }
`;

const Image = styled.img`
  width: 100%; /* Ensure the image fills the entire container */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Cover the entire container */
  border-radius: 25px; /* Ensure the image itself is also a circle */
  position: relative;
  z-index: 1; /* Ensure the image is above the inner background */
`;

const ProfilePicture = () => {
  const [color, setColor] = useState(colors[0]); // Start with the first color in the array

  useEffect(() => {
    const interval = setInterval(() => {
      const newColor = getNextColor(color);
      setColor(newColor);
    }, 2000); // Change color every 4 seconds

    return () => clearInterval(interval);
  }, [color]);

  return (
    <ImageContainer color={color}>
      <Image src={profilePicture} alt={"Profile Picture"} />
    </ImageContainer>
  );
};

export default ProfilePicture;

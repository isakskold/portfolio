// Logo.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

const rotateItem = keyframes`
    0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px; // Adjust as needed
  height: 60px; // Adjust as needed
  border-radius: 50%;
  background-color: var(--turquoise-dark);

  box-shadow: ${(props) =>
    props.$focus
      ? "var(--box-shadow-focus)"
      : "0 0 8px 10px rgba(0, 0, 0, 0.2)"};

  animation: ${rotateItem} 20s linear infinite;

  @media (max-width: 600px) {
    animation: none;
    box-shadow: 0 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const LogoImage = styled.img`
  max-width: 60%;
  max-height: 60%;
`;

const Logo = ({ src, name, focus }) => {
  return (
    <LogoWrapper title={name} $focus={focus}>
      <LogoImage src={src} alt={name} />
    </LogoWrapper>
  );
};

export default Logo;

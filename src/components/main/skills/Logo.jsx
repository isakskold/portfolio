// Logo.jsx
import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; // Adjust as needed
  height: 50px; // Adjust as needed
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff; // Optional, to enhance visibility
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Optional, for visual depth
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Logo = ({ src, name }) => {
  return (
    <LogoWrapper title={name}>
      <LogoImage src={src} alt={name} />
    </LogoWrapper>
  );
};

export default Logo;

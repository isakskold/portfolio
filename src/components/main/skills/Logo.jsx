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
  box-shadow: 0 0 8px 20px rgba(0, 0, 0, 0.2); /* Centered shadow */
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

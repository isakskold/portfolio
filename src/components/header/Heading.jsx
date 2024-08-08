import React from "react";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 3rem;
  margin: 0;
  margin-top: 1.7rem;
  position: absolute;
  top: 1rem;

  @media (max-width: 300px) {
    position: static;
    margin-bottom: 1rem;
  }

  @media (max-width: 1200px) {
    position: static;
  }

  @media (max-height: 540px) {
    margin-bottom: 2rem;
  }
`;

const Heading = () => {
  return (
    <>
      <Name>Isak Sköld</Name>
    </>
  );
};

export default Heading;

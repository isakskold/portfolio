import React from "react";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 3rem;
  margin: 0;
  margin-top: 1.7rem;
  position: absolute;
  top: 1rem;
`;

const Heading = () => {
  return (
    <>
      <Name>Isak Sköld</Name>
    </>
  );
};

export default Heading;

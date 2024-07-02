import React from "react";
import styled from "styled-components";

const Sidebar = styled.aside`
  text-align: center;
  border: 1px solid #ccc; /* Example border */
  border-radius: var(--border-radius-small);
  height: 100%;
  overflow-y: hidden;
`;

const LinkedinFeed = () => {
  return (
    <Sidebar>
      <h3>Linkedin Feed</h3>
    </Sidebar>
  );
};

export default LinkedinFeed;

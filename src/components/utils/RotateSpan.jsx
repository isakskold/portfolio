import React from "react";
import styled, { css } from "styled-components";
import useSectionStore from "../../store/useSectionStore";

const StyledSpan = styled.span`
  display: inline-block;
  font-size: 1.8rem;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => (props.$expanded ? "rotate(90deg)" : "rotate(0deg)")};
  cursor: pointer;
`;

const RotateSpan = ({ id, context, style, title }) => {
  const isExpanded = useSectionStore((state) => state.expandedSections[id]);
  const toggleSection = useSectionStore((state) => state.toggleSection);

  const handleClick = (event) => {
    event.stopPropagation(); // Prevents click event from bubbling up
    toggleSection(id);
  };

  return (
    <StyledSpan
      id={`${id}Arrow${context}`}
      $expanded={isExpanded}
      onClick={handleClick}
      style={style}
      title={title}
    >
      ►
    </StyledSpan>
  );
};

export default RotateSpan;

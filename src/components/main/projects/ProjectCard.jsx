import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import ImageModal from "./ImageModal";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-small);
  background-color: var(--turquoise-bright-bgc);
  border-radius: var(--border-radius-large);
  padding: var(--spacing-small);
  margin-bottom: var(
    --spacing-xs
  ); //Quick fix for bug where article border clips. Probably subpixel rendering issue
  border: 1px solid rgba(250, 250, 250, 0.1);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  cursor: auto;

  /* Prevent click events from propagating */
  &:click {
    pointer-events: none;
  }
`;

const Description = styled.p`
  white-space: pre-wrap;
`;

const Technologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: var(--spacing-small);
`;

const ThumbnailsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% + var(--spacing-small) * 2);
  margin-left: calc(-1 * var(--spacing-small));
`;

const Fader = styled.div`
  position: absolute;
  height: 130px;
  width: var(--spacing-small);
  top: 0;
  z-index: 1000;

  background: ${({ $position }) => css`
    linear-gradient(
      to ${
        $position === "left" ? "left" : "right"
      }, /* Reverse the gradient direction */
      rgba(22, 36, 50, 0) 0%, /* Start with transparent */
      rgba(22, 36, 50, 0.5) 30%,
      rgba(22, 36, 50, 0.6) 50%,
      rgba(22, 36, 50, 1) 100% /* End with opaque */
    )
  `};

  ${(props) =>
    props.$position === "left" &&
    css`
      left: 0;
    `}

  ${(props) =>
    props.$position === "right" &&
    css`
      right: 0;
    `}
`;

const detectBrowser = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("firefox")) {
    return "firefox";
  } else if (userAgent.includes("chrome") && !userAgent.includes("edg")) {
    return "chrome";
  } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
    return "safari";
  } else if (userAgent.includes("edg")) {
    return "edge";
  } else {
    return "other";
  }
};

const Thumbnails = styled.div`
  display: flex;
  gap: var(--spacing-medium);
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  position: relative;
  height: 180px; /* fixed height to avoid resizing */

  :first-child {
    margin-left: var(--spacing-small);
  }

  :last-child {
    margin-right: var(--spacing-small);
  }

  ${(props) =>
    props.$browser === "firefox"
      ? css`
          scrollbar-color: #888 #f1f1f1;
        `
      : props.$browser === "chrome" || props.$browser === "safari"
      ? css`
          &::-webkit-scrollbar {
            height: 0.2rem;
          }

          &:hover::-webkit-scrollbar {
            height: 1.2rem;
          }

          &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }

          &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }

          &::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `
      : ""}
`;

const Thumbnail = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: var(--spacing-small);
`;

const ProjectLink = styled.a`
  margin-right: auto;
`;

const ProjectCard = ({ title, images, link, description, technologies }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [browser, setBrowser] = useState("other");
  const thumbnailsWrapperRef = useRef(null);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    setBrowser(detectBrowser());
  }, []);

  return (
    <Article onClick={(e) => e.stopPropagation()}>
      <h3>{title}</h3>
      <Description>{description}</Description>

      <ThumbnailsWrapper ref={thumbnailsWrapperRef}>
        <Fader $position="left"></Fader>
        <Fader $position="right"></Fader>
        <Thumbnails ref={thumbnailsRef} $browser={browser}>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </Thumbnails>
      </ThumbnailsWrapper>

      {technologies && (
        <Technologies>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </Technologies>
      )}

      {link && (
        <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </ProjectLink>
      )}

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt={title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </Article>
  );
};

export default ProjectCard;

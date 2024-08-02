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
  border: 1px solid rgba(250, 250, 250, 0.1);
  width: 100%;
  box-sizing: border-box;
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
  justify-content: space-around;
  align-items: center;
  gap: var(--spacing-xs);
`;

const ThumbnailsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% + var(--spacing-small) * 2);
  margin-left: calc(-1 * var(--spacing-small));
`;

const Thumbnails = styled.div`
  display: flex;
  gap: var(--spacing-medium);
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;

  :first-child {
    margin-left: var(--spacing-small);
  }

  :last-child {
    margin-right: var(--spacing-small);
  }

  ${(props) =>
    props.isFirefox &&
    css`
      scrollbar-width: thin;
      scrollbar-color: #888 #f1f1f1;
    `}

  ${(props) =>
    !props.isFirefox &&
    css`
      &::-webkit-scrollbar {
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
    `}
`;

const Thumbnail = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: var(--spacing-small);
`;

const ProjectCard = ({ title, images, link, description, technologies }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFirefox, setIsFirefox] = useState(false);
  const thumbnailsWrapperRef = useRef(null);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    setIsFirefox(typeof InstallTrigger !== "undefined");
  }, []);

  return (
    <Article onClick={(e) => e.stopPropagation()}>
      <h3>{title}</h3>
      <Description>{description}</Description>

      <ThumbnailsWrapper ref={thumbnailsWrapperRef}>
        <Thumbnails ref={thumbnailsRef} $isFirefox={isFirefox}>
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
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
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

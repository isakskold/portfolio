import React, { useState, useRef } from "react";
import styled from "styled-components";
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

const ThumbnailsContainer = styled.div`
  position: relative;
`;

const Thumbnails = styled.div`
  display: flex;
  gap: var(--spacing-medium);
  overflow-x: scroll;
  white-space: nowrap;
  scroll-behavior: smooth; /* Smooth scrolling effect */

  /* Hide scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for other browsers */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Thumbnail = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5em;
  cursor: pointer;
  z-index: 1;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
  }
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 0;
`;

const RightArrowButton = styled(ArrowButton)`
  right: 0;
`;

const ProjectCard = ({ title, images, link, description, technologies }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const thumbnailsRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const scrollThumbnails = (direction) => {
    if (thumbnailsRef.current) {
      const scrollAmount = thumbnailsRef.current.clientWidth;
      thumbnailsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Article>
      <h3>{title}</h3>
      <Description>{description}</Description>

      <ThumbnailsContainer>
        <LeftArrowButton
          onClick={(e) => {
            handleClick(e);
            scrollThumbnails("left");
          }}
        >
          {"<"}
        </LeftArrowButton>
        <Thumbnails ref={thumbnailsRef}>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              onClick={(e) => {
                handleClick(e);
                setSelectedImage(image);
              }}
            />
          ))}
        </Thumbnails>
        <RightArrowButton
          onClick={(e) => {
            handleClick(e);
            scrollThumbnails("right");
          }}
        >
          {">"}
        </RightArrowButton>
      </ThumbnailsContainer>

      {technologies && (
        <Technologies>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </Technologies>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          View Project
        </a>
      )}
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt={title}
          onClose={(e) => {
            handleClick(e);
            setSelectedImage(null);
          }}
        />
      )}
    </Article>
  );
};

export default ProjectCard;

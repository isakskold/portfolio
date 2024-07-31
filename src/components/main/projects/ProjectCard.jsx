import React, { useState } from "react";
import styled from "styled-components";
import ImageModal from "./ImageModal";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: var(--spacing-small);
  background-color: var(--turquoise-bright-bgc);
  border-radius: var(--border-radius-large);
  padding: var(--spacing-small);
  border: 1px solid rgba(250, 250, 250, 0.1);
`;

const Description = styled.p`
  white-space: pre-wrap;
`;

const ThumbnailsAndTechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Technologies = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
`;

const Thumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-small);
  justify-content: space-between;
  max-width: 59%;

  @media (max-width: 922px) {
    max-width: 75%;
    flex-grow: 1;
  }

  @media (max-width: 753px) {
    max-width: 60%;
    flex-grow: 1;
  }

  @media (max-width: 641px) {
    max-width: 70%;
    flex-grow: 1;
  }

  @media (max-width: 560px) {
    max-width: 102px;
  }
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ProjectCard = ({ title, images, link, description, technologies }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleThumbnailClick = (e, image) => {
    e.stopPropagation(); // Prevents click from bubbling up to parent elements
    setSelectedImage(image);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation(); // Prevents click from bubbling up to parent elements
    setSelectedImage(null);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevents click from bubbling up to parent elements
  };

  return (
    <Article>
      <h3>{title}</h3>
      <Description>{description}</Description>
      <ThumbnailsAndTechnologiesWrapper>
        <Thumbnails>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              onClick={(e) => handleThumbnailClick(e, image)}
            />
          ))}
        </Thumbnails>

        {technologies && (
          <Technologies>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </Technologies>
        )}
      </ThumbnailsAndTechnologiesWrapper>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          View Project
        </a>
      )}
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt={title}
          onClose={handleCloseModal}
        />
      )}
    </Article>
  );
};

export default ProjectCard;

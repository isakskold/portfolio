import React from "react";
import styled from "styled-components";
import profilePicture from "../../images/profilePicture.JPEG";

const ImageContainer = styled.div`
  margin: var(--spacing-medium) 0;
  height: 15rem; /* Set height and width to create a square */
  width: 15rem; /* Set height and width to create a square */
  overflow: hidden;
  border-radius: 30px; /* Make the container a circle */

  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
`;

const Image = styled.img`
  width: 100%; /* Ensure the image fills the entire container */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Cover the entire container */
  border-radius: 30px; /* Ensure the image itself is also a circle */
`;

const ProfilePicture = () => {
  return (
    <ImageContainer>
      <Image src={profilePicture} alt={"Profile Picture"} />
    </ImageContainer>
  );
};

export default ProfilePicture;

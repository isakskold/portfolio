import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

// Import images for Movie Database
import movieDB1 from "../../../images/moviedbimages/dropdownsearch.png";
import movieDB2 from "../../../images/moviedbimages/favorites.png";
import movieDB3 from "../../../images/moviedbimages/movieDB.png";
import movieDB4 from "../../../images/moviedbimages/moviepage.png";
import movieDB5 from "../../../images/moviedbimages/moviesearch.png";
import movieDB6 from "../../../images/moviedbimages/watchlist.png";

// Import images for Online Coffee Shop
import coffeeShop1 from "../../../images/airbeanBackendImages/campaignOffer.png";
import coffeeShop2 from "../../../images/airbeanBackendImages/cart.png";
import coffeeShop3 from "../../../images/airbeanBackendImages/collections.png";
import coffeeShop4 from "../../../images/airbeanBackendImages/customers.png";
import coffeeShop5 from "../../../images/airbeanBackendImages/getProducts.png";
import coffeeShop6 from "../../../images/airbeanBackendImages/login.png";
import coffeeShop7 from "../../../images/airbeanBackendImages/orders.png";

// Define projects array
const projects = [
  {
    title: "Movie Database",
    images: [movieDB1, movieDB2, movieDB3, movieDB4, movieDB5, movieDB6],
    link: "https://github.com/Linuszackrisson/movie-db-react",
    description:
      "Group project made in school. Users can search for movies, view details and add movies to watchlist and favorite list. This project makes requests to the omDB api to fetch data about movies. \n\nIn this project I was mainly focusing on the javascript in react, while the other group members created the design with css.",
    technologies: ["React", "Axios", "Javascript", "Css", "Git"],
  },
  {
    title: "Online Coffee Shop",
    images: [
      coffeeShop1,
      coffeeShop2,
      coffeeShop3,
      coffeeShop4,
      coffeeShop5,
      coffeeShop6,
      coffeeShop7,
    ],
    link: "https://github.com/isakskold/errorr404-backend-individual",
    description:
      "Individual school project based on a group project. This project only covers the backend. Users can create accounts and place orders. Admins can access more endpoints than guests and customer accounts. Use endpoints in the documentation to make CRUD operations to simulate user and admin actions.",
    technologies: ["Express", "NeDB", "JavaScript", "Git"],
  },
  // Add more projects as needed
];

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: var(--spacing-medium);
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          images={project.images}
          link={project.link}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;

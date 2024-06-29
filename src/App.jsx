import React from "react";
import Logo from "./components/header/Logo";
import NavMenu from "./components/header/NavMenu";
import styled from "styled-components";
import "./globalStyle.css";
import Introduction from "./components/main/Introduction";
import Contact from "./components/main/Contact";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects";
import SidebarMenu from "./components/main/SidebarMenu";
import LinkedinFeed from "./components/main/LinkedinFeed";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw; /* Responsive width */
  max-width: 1700px; /* Maximum width for larger screens */
  min-width: 320px; /* Minimum width to avoid layout issues on small screens */
  padding: var(--spacing-medium);
  box-sizing: border-box; /* Include padding in width and height */
  margin: auto; /* Center the container horizontally */
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-medium);
  background-color: rgba(248, 249, 250, 0.3); /* 30% opacity */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  justify-content: center;
  padding: var(--spacing-medium);
  gap: var(--spacing-large);
  background-color: rgba(0, 0, 0, 0.3); /* 30% opacity */
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  gap: var(--spacing-large);

  /* Common styling for children of MainContent */
  & > * {
    width: auto; /* Fill the whole width */
    border: 1px solid #ccc; /* Example border */
    border-radius: var(--border-radius-small);
    padding: var(--spacing-medium); /* Example padding */
  }
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Logo></Logo>
        <NavMenu></NavMenu>
      </Header>

      <Main>
        <SidebarMenu></SidebarMenu>

        <MainContent>
          <Introduction></Introduction>
          <Contact></Contact>
          <Skills></Skills>
          <Projects></Projects>
        </MainContent>

        <LinkedinFeed></LinkedinFeed>
      </Main>
    </Container>
  );
};

export default App;

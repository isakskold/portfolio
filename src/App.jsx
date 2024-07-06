import React from "react";
import NavMenu from "./components/header/NavMenu";
import styled from "styled-components";
import "./globalStyle.css";
import Heading from "./components/header/Heading";
import Section from "./components/main/Section";
import Introduction from "./components/main/introduction/Introduction";
import Contact from "./components/header/contact/Contact";
import Skills from "./components/main/skills/Skils";
import Projects from "./components/main/projects/Projects";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 7rem;
  box-sizing: border-box;
  width: 100vw;
  max-width: 1300px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 6rem 0;
  /* border: 2px solid #ccc;
  border-radius: var(--border-radius-small); */
  position: sticky;
  top: 0; /* Stick to the top */
  max-height: 100vh; /* Full viewport height */
  box-sizing: border-box;
  overflow-y: hidden; /* Enable vertical scrolling */
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 50%;
  padding: 6rem 0;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Heading></Heading>
        <NavMenu></NavMenu>
        <Contact> </Contact>
      </Header>

      <Main>
        <Section title="Introduction">
          <Introduction />
        </Section>

        <Section title="Skills">
          <Skills />
        </Section>
        <Section title="Projects">
          <Projects />
        </Section>
      </Main>
    </Container>
  );
};

export default App;

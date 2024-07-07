import React, { useState, useEffect } from "react";
import NavMenu from "./components/header/NavMenu";
import styled from "styled-components";
import "./globalStyle.css";
import Heading from "./components/header/Heading";
import Section from "./components/main/Section";
import Introduction from "./components/main/introduction/Introduction";
import Contact from "./components/header/contact/Contact";
import Skills from "./components/main/skills/Skils";
import Projects from "./components/main/projects/Projects";

// Breakpoint for desktop vs mobile layout
export const breakpoint = "923px";
// Function to parse the breakpoint value
const parseBreakpoint = (breakpoint) => parseInt(breakpoint, 10);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 7rem;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  max-width: 1300px;

  @media (max-width: ${breakpoint}) {
    padding: 0 12%;
  }
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
  @media (max-width: ${breakpoint}) {
    position: static;
    width: 100%;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  padding: 6rem 0;
  box-sizing: border-box;
  @media (max-width: ${breakpoint}) {
    width: 100%;
    padding-top: 0;
  }
`;

const App = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= parseBreakpoint(breakpoint)
  );

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth <= parseBreakpoint(breakpoint));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Header>
        <Heading></Heading>
        <NavMenu></NavMenu>
        {!isMobile && <Contact />}
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

        {isMobile && <Contact />}
      </Main>
    </Container>
  );
};

export default App;

import React, { useState, useEffect, useRef } from "react";
import NavMenu from "./components/header/NavMenu";
import styled from "styled-components";
import "./globalStyle.css";
import Heading from "./components/header/Heading";
import Section from "./components/main/Section";
import Introduction from "./components/main/introduction/Introduction";
import Contact from "./components/header/contact/Contact";
import Skills from "./components/main/skills/Skils";
import Projects from "./components/main/projects/Projects";
import ProfilePicture from "./components/header/ProfilePicture";

// Breakpoint for desktop vs mobile layout
export const breakpoint = "1200px";
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

  @media (max-width: 600px) {
    padding: 0 7.5%;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-bottom: 6rem;
  padding-top: 10rem;
  /* border: 2px solid #ccc;
  border-radius: var(--border-radius-small); */
  position: sticky;
  top: 0; /* Stick to the top */
  max-height: 100vh; /* Full viewport height */
  box-sizing: border-box;
  /* Enable vertical scrolling */
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
  padding-bottom: 6rem;
  padding-top: 10rem;
  box-sizing: border-box;
  @media (max-width: ${breakpoint}) {
    width: 100%;
    padding-top: 0;
  }
`;

const Footer = styled.footer`
  display: none;
  @media (max-width: ${breakpoint}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

const App = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= parseBreakpoint(breakpoint)
  );
  const containerRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth <= parseBreakpoint(breakpoint));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container ref={containerRef}>
      <Header>
        <Heading></Heading>
        <ProfilePicture />
        {!isMobile && <NavMenu containerRef={containerRef} />}
        <Contact />
      </Header>

      <Main>
        <Section id="introduction" title="Introduction">
          <Introduction />
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>
      </Main>
      <Footer onClick={handleScrollToTop}>↑ Back to top</Footer>
    </Container>
  );
};

export default App;

import React from "react";

import NavMenu from "./components/header/NavMenu";
import styled from "styled-components";
import "./globalStyle.css";

import LinkedinFeed from "./components/header/LinkedinFeed";
import Heading from "./components/header/Heading";
import Section from "./components/main/Section";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 7rem;
  box-sizing: border-box;
  width: 100vw;
  max-width: 1300px;
  gap: var(--spacing-large);
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: baseline;
  padding: 6rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  justify-content: space-between;
  width: 50%;
  padding: 6rem 0;
  gap: var(--spacing-large);
  /* border: 2px solid #ccc;
  border-radius: var(--border-radius-small); */

  box-sizing: border-box;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Heading></Heading>
        <NavMenu></NavMenu>
        <LinkedinFeed></LinkedinFeed>
      </Header>

      <Main>
        <Section title="Introduction"></Section>
        <Section title="Contact"> </Section>
        <Section title="Skills"> </Section>
        <Section title="Projects"> </Section>
      </Main>
    </Container>
  );
};

export default App;

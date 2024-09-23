import React from "react";
import styled from "styled-components";
import SkillsCircle from "./SkillsCircle";

import Html5Logo from "../../../logos/html5-color.svg";
import Css3Logo from "../../../logos/css3-color.svg";
import JavascriptLogo from "../../../logos/javascript-color.svg";
import ReactLogo from "../../../logos/react-color.svg";
import NodeJsLogo from "../../../logos/nodedotjs-color.svg";
import GitLogo from "../../../logos/git-color.svg";
import ExpressLogo from "../../../logos/express-color.svg";
import StyledComponentsLogo from "../../../logos/styledcomponents-color.svg";
import AxiosLogo from "../../../logos/axios-color.svg";
import ZustandLogo from "../../../logos/zustandLogo.svg";
import awsLogo from "../../../logos/awsLogo.svg";

const skills = [
  { src: Html5Logo, name: "HTML" },
  { src: Css3Logo, name: "CSS" },
  { src: JavascriptLogo, name: "JavaScript" },
  { src: awsLogo, name: "AWS" },
  { src: ReactLogo, name: "React" },
  { src: NodeJsLogo, name: "Node.js" },
  { src: GitLogo, name: "Git" },
  { src: ExpressLogo, name: "Express" },
  { src: StyledComponentsLogo, name: "Styled components" },
  { src: AxiosLogo, name: "Axios" },
  { src: ZustandLogo, name: "Zustand" },
];

const SkillsCircleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Skills = () => {
  return (
    <SkillsCircleWrapper>
      <SkillsCircle skills={skills} />
    </SkillsCircleWrapper>
  );
};

export default Skills;

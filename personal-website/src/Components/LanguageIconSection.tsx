import React from "react";
import { Container } from "@mui/material";
import styled, { keyframes, css } from "styled-components";
import springboot from "../Images/spring.svg";
import cpp from "../Images/c-.png";
import csharp from "../Images/c-sharp.png";
import javascript from "../Images/js.png";
import typescript from "../Images/typescript.png";
import java from "../Images/java.png";
import python from "../Images/python.png";
import react from "../Images/reactlogo.png";
import useOnScreen from "../Components/Hooks/useOnScreen"; // Import the custom hook

// Keyframes for width animation
const fillAnimation = (value: number) => keyframes`
  0% { width: 0; }
  100% { width: ${value}%; }
`;

// Keyframes for color animation
const colorAnimation = keyframes`
  0% { background-color: #5a5a5a; }
  50% { background-color: #3a3; }
  100% { background-color: #6a6a6a; }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  margin: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Icon = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 20px;
`;

const Meter = styled.div<{ value: number; isVisible: boolean }>`
  width: 200px;
  height: 20px;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 100%;
    background-color: #4caf50;
    border-radius: 10px;
    width: ${({ isVisible, value }) => (isVisible ? `${value}%` : "0%")};
    ${({ isVisible, value }) =>
      isVisible &&
      css`
        animation: ${fillAnimation(value)} 2s forwards,
          ${colorAnimation} 5s infinite alternate;
      `};
  }
`;

export default function SkillsSection() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <Container sx={{ display: "flex" }}>
      <SkillsContainer ref={ref}>
        <SkillItem>
          <Icon src={javascript} alt="JavaScript" />
          <Meter value={85} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={cpp} alt="C++" />
          <Meter value={85} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={java} alt="Java" />
          <Meter value={83} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={typescript} alt="TypeScript" />
          <Meter value={80} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={react} alt="React" />
          <Meter value={80} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={python} alt="Python" />
          <Meter value={75} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={springboot} alt="Spring Boot" />
          <Meter value={72} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={csharp} alt="C#" />
          <Meter value={65} isVisible={isVisible} />
        </SkillItem>
      </SkillsContainer>
    </Container>
  );
}

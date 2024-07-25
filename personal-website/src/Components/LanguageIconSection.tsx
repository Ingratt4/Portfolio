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
import useOnScreen from "../Components/Hooks/useOnScreen";

const fillAnimation = (value: number) => keyframes`
  0% { width: 0; }
  100% { width: ${value}%; }
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

const Icon = styled.img<{ isVisible: boolean }>`
  width: 75px;
  height: 75px;
  margin-right: 20px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transition-delay: 1.5s; /* Adjust delay to match fade-in timing */
    `}
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
        animation: ${fillAnimation(value)} 2s forwards;
        animation-delay: 5s; /* Adjust delay to start after fade-in */
      `};
  }
`;

export default function IconSection() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <Container sx={{ display: "flex" }}>
      <SkillsContainer ref={ref}>
        <SkillItem>
          <Icon src={javascript} alt="JavaScript" isVisible={isVisible} />
          <Meter value={85} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={cpp} alt="C++" isVisible={isVisible} />
          <Meter value={85} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={java} alt="Java" isVisible={isVisible} />
          <Meter value={83} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={typescript} alt="TypeScript" isVisible={isVisible} />
          <Meter value={80} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={react} alt="React" isVisible={isVisible} />
          <Meter value={80} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={python} alt="Python" isVisible={isVisible} />
          <Meter value={75} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={springboot} alt="Spring Boot" isVisible={isVisible} />
          <Meter value={72} isVisible={isVisible} />
        </SkillItem>
        <SkillItem>
          <Icon src={csharp} alt="C#" isVisible={isVisible} />
          <Meter value={65} isVisible={isVisible} />
        </SkillItem>
      </SkillsContainer>
    </Container>
  );
}

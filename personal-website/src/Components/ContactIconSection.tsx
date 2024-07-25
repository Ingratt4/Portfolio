import linkedin from "../Images/linkedin-logo-bold.svg";
import cv from "../Images/resume.svg";
import github from "../Images/icons8-github-100.png";
import styled, { keyframes, css } from "styled-components";
import { Container } from "@mui/material";

interface ImageButtonProps {
  index: number;
  alt: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ImageButton = styled.a<ImageButtonProps>`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  opacity: 0;
  transform: translateX(-50px);
  animation: ${fadeIn} 1.5s ease-in-out forwards;

  ${(props) =>
    props.index !== undefined &&
    css`
      animation-delay: ${6 + props.index * 0.5}s;
    `}

  img {
    width: 100px;
    height: 100px;
    margin: 20px;
    transition: transform 0.3s, border-radius 0.3s;
    filter: brightness(0) invert(1); /* Make the icons white */
    border-radius: ${(props) => {
      if (props.alt === "GitHub") return "80px";
      if (props.alt === "Resume") return "10px";
      if (props.alt === "LinkedIn") return "15px";
    }};
  }

  &:hover img {
    transform: scale(1.1);
    border-radius: ${(props) => {
      if (props.alt === "GitHub") return "80px";
      if (props.alt === "Resume") return "10px";
      if (props.alt === "LinkedIn") return "15px";
    }};
  }
`;

export default function ContactIconSection() {
  const icons = [
    { src: github, alt: "GitHub", href: "https://github.com/Ingratt4" },
    { src: cv, alt: "Resume", href: "/path/to/resume" },
    {
      src: linkedin,
      alt: "LinkedIn",
      href: "https://ca.linkedin.com/in/cameron-ingratta-3b6496211",
    },
  ];

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <ImageContainer>
        {icons.map((icon, index) => (
          <ImageButton
            key={icon.alt}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            alt={icon.alt}
            index={index}
          >
            <img src={icon.src} alt={icon.alt} />
          </ImageButton>
        ))}
      </ImageContainer>
    </Container>
  );
}

import linkedin from "../Images/linkedin-logo-bold.svg";
import cv from "../Images/resume.svg";
import github from "../Images/icons8-github-100.png";
import styled from "styled-components";
import { Container } from "@mui/material";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & img {
    width: 100px;
    height: 100px;
    margin: 20px;
    transition: transform 0.3s, border-radius 0.3s;
  }

  & svg {
    fill: #b9d6f2;
  }

  .img-overlay {
    position: relative;
    display: inline-block;
  }

  .img-overlay img {
    display: block;
    width: 100px;
    height: 100px;
    filter: brightness(0) saturate(100%) invert(89%) sepia(6%) saturate(3260%)
      hue-rotate(157deg) brightness(96%) contrast(94%);
  }
`;

const ImageButton = styled.a`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  text-decoration: none;

  img {
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
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <ImageContainer>
        <ImageButton
          href="https://github.com/Ingratt4"
          target="_blank"
          rel="noopener noreferrer"
          alt="GitHub"
        >
          <div className="img-overlay">
            <img src={github} alt="GitHub" />
          </div>
        </ImageButton>

        <ImageButton
          href="/path/to/resume"
          target="_blank"
          rel="noopener noreferrer"
          alt="Resume"
        >
          <div className="img-overlay">
            <img src={cv} alt="Resume" />
          </div>
        </ImageButton>

        <ImageButton
          href="https://ca.linkedin.com/in/cameron-ingratta-3b6496211"
          target="_blank"
          rel="noopener noreferrer"
          alt="LinkedIn"
        >
          <div className="img-overlay">
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </ImageButton>
      </ImageContainer>
    </Container>
  );
}

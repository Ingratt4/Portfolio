import { Box, Container, Typography } from "@mui/material";
import "@fontsource/roboto/500.css";
import styled, { keyframes } from "styled-components";

// Define the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define the wave animation
const wave = keyframes`
  0% { transform: rotate(0.0deg); }
  10% { transform: rotate(14.0deg); }
  20% { transform: rotate(-8.0deg); }
  30% { transform: rotate(14.0deg); }
  40% { transform: rotate(-4.0deg); }
  50% { transform: rotate(10.0deg); }
  60% { transform: rotate(0.0deg); }  
  100% { transform: rotate(0.0deg); }
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h3`
  font-size: 70px;
  margin: 0;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out 0.5s forwards;
`;

const WaveEmoji = styled.span`
  display: inline-block;
  font-size: 70px;
  margin-left: 10px;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out 2s forwards, ${wave} 2s infinite 2s;
  transform-origin: 70% 70%;
`;

const Title = styled.h4`
  text-align: center;
  margin-top: 2rem;
  font-size: 24px;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out 3.5s forwards;
`;

export default function MiddleBlog() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography component="div">
          <NameWrapper>
            <Name>Hi, I'm Cameron</Name>
            <WaveEmoji>👋</WaveEmoji>
          </NameWrapper>
          <Title>
            I will be graduating with a degree in computer science in October
            2024.
          </Title>
        </Typography>
      </Container>
    </Box>
  );
}

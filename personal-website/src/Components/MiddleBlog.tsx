import { Box, Container, Typography } from "@mui/material";
import "@fontsource/roboto/500.css";
import styled from "styled-components";

const Name = styled.h3`
  font-size: 70px;
  margin: 0;
  width: 100%;
  text-align: center;
`;
const Title = styled.h4`
  text-align: center;
  margin-top: 2rem;
  font-size: 24px;
`;
const Sentence = styled.p`
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
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
        <Typography>
          <Name>Hi, I'm Cameron.</Name>
          <Title>
            I will be graduating with a degree in computer science in October
            2024.
          </Title>
          <Sentence>
            I am currently looking to break into the industry.
          </Sentence>
        </Typography>
      </Container>
    </Box>
  );
}

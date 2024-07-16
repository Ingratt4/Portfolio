import { Box, Container, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import IconSection from "./LanguageIconSection";
import MiddleBlog from "./MiddleBlog";
import ContactIconSection from "./ContactIconSection";

const Paragraph = styled.p`
  margin-top: 16px;
  font-size: 18px;
  opacity: 0;
  animation: ${keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `} 1.5s ease-in-out forwards;
  animation-delay: 4.5s; /* Adjust delay to match sequential fade-in */
`;

const LeftSection = styled(Box)`
  display: flex; /* Enable flexbox */
  flex: 1;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 200px;
  opacity: 0;
  justify-content: center;
  align-items: center;
  animation: ${keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `} 1.5s ease-in-out forwards;
  animation-delay: 4.5s; /* Adjust delay to match sequential fade-in */
`;

const ContentWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin-top: 5rem;
  overflow: hidden;
`;

const BlurContainer = styled(Container)`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
`;

export default function MainPage() {
  return (
    <BlurContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "5px",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <MiddleBlog />

      <ContentWrapper>
        <LeftSection>
          <Typography>
            <Paragraph>
              During my years of studying programming, I have gained proficiency
              in a variety of languages, frameworks, and tools. Recently, I have
              been focusing on learning Spring Boot and enhancing my skills with
              React and JavaScript. Additionally, I have started exploring
              TypeScript. I am highly familiar with Java and C++, and I have
              also worked with Python and C#.
            </Paragraph>
          </Typography>
        </LeftSection>

        <RightSection>
          <IconSection />
        </RightSection>
      </ContentWrapper>

      <ContactIconSection />
    </BlurContainer>
  );
}

import { Box, Container, Typography, Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import IconSection from "../Components/LanguageIconSection";
import MiddleBlog from "../Components/MiddleBlog";
import ContactIconSection from "../Components/ContactIconSection";

const Heading = styled.h1`
  font-size: 50px;
  text-align: center;
`;

const Paragraph = styled.p`
  margin-top: 16px;
  font-size: 18px;
`;

const LeftSection = styled(Box)`
  flex: 1;
  padding-right: 20px;
`;

const RightSection = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 200px; /* Adjust as needed to give space to the icons */
`;

const ContentWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin-top: 5rem;
  overflow: hidden; /* Ensure no scrollbar for this section */
`;

export default function CombinedPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "5px",
        width: "100%",
        overflow: "hidden", // Ensure no scrollbar for the container
      }}
    >
      <MiddleBlog />

      <Button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Click me :)"}
      </Button>

      {isVisible && (
        <ContentWrapper>
          <LeftSection>
            <Typography>
              <Heading>Skills</Heading>

              <Paragraph>
                During my years of studying programming, I have gained
                proficiency in a variety of languages, frameworks, and tools.
                Recently, I have been focusing on learning Spring Boot and
                enhancing my skills with React and JavaScript. Additionally, I
                have started exploring TypeScript. I am highly familiar with
                Java and C++, and I have also worked with Python and C#.
              </Paragraph>
            </Typography>
          </LeftSection>

          <RightSection>
            <IconSection />
          </RightSection>
        </ContentWrapper>
      )}

      <ContactIconSection />

      {/* Additional Content to Make the Page Longer */}
    </Container>
  );
}

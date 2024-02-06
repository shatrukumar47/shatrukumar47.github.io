import { Box, Container, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { techSkills } from "../data/skillsData";
import SkillSections from "../components/SkillSections";

const Skills = () => {
  return (
    <Box id="skills" bg={"#0F1624"}>
      <div data-aos="fade-up">
        <HStack justifyContent={"center"} marginBottom={"80px"}>
          <Heading color={"#C651CD"} textAlign={"center"}>
            Technical
          </Heading>
          <Heading color={"white"} textAlign={"center"}>
            Skills
          </Heading>
        </HStack>
        <Container
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={"20px"}
          maxW={"95%"}
        >
          {techSkills?.map((item, index) => {
            return <SkillSections key={index} item={item} />;
          })}
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1E1842"
            fill-opacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,229.3C672,213,768,203,864,213.3C960,224,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </Box>
  );
};

export default Skills;

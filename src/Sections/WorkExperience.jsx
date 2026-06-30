import { Box, Container, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { experienceData } from "../data/experienceData";
import ExperienceCard from "../components/ExperienceCard";

const WorkExperience = () => {
  return (
    <Box id="experience" bg={"#1E1842"}>
      <div data-aos="fade-up">
        <HStack justifyContent={"center"} marginBottom={"80px"} paddingTop={"50px"}>
          <Heading color={"#C651CD"} textAlign={"center"}>
            Work
          </Heading>
          <Heading color={"white"} textAlign={"center"}>
            Experience
          </Heading>
        </HStack>
        <Container
          maxW={{ base: "100%", md: "90%", lg: "80%" }}
          display={"flex"}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          alignItems={"start"}
          gap={"40px"}
        >
          {experienceData?.map((item, index) => {
            return <ExperienceCard key={index} experience={item} />;
          })}
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0F1624"
            fillOpacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,229.3C672,213,768,203,864,213.3C960,224,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </Box>
  );
};

export default WorkExperience;

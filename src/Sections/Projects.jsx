import { Box, Container, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { projects } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";

const data = projects;

const Projects = () => {
  return (
    <Box id="projects" bg={"#1E1842"}>
      <div data-aos="fade-up">
        <HStack justifyContent={"center"} marginBottom={"100px"}>
          <Heading color={"#C651CD"} textAlign={"center"}>
            My
          </Heading>
          <Heading color={"white"} textAlign={"center"}>
            Projects
          </Heading>
        </HStack>
        <Container
          maxW={{ base: "100%", md: "90%", lg: "90%" }}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={"40px"}
        >
          {data?.map((item, index) => {
            return <ProjectCard key={index} item={item} />;
          })}
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0F1624"
            fill-opacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,229.3C672,213,768,203,864,213.3C960,224,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </Box>
  );
};

export default Projects;

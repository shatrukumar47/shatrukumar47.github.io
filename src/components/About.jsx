import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import aboutAnime from "./aboutAnime.gif";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <Box
      id="about"
      className="about section"
      bg={"#1E1842"}
      padding={"100px 10px 150px 10px"}
    >
      <Container maxW={"8xl"}>
        <HStack justifyContent={"center"} marginBottom={"50px"}>
          <Heading color={"#C651CD"} textAlign={"center"}>
            About
          </Heading>
          <Heading color={"white"} textAlign={"center"}>
            Me
          </Heading>
        </HStack>
        <Stack direction={{base: "column", md: "column", lg: "row"}} spacing={"20px"}>
          <Image src={aboutAnime} />
          <VStack spacing={"20px"} w={{base: "95%", md: "80%", lg: "90%"}} m={"auto"}>
            <HStack
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              spacing={"10px"}
            >
              <Box marginTop={"5px"}>
                <FaReact color="#C651CD" fontSize={"20px"} />
              </Box>
              <Text color={"white"} textAlign={"justify"}>
                As an outcome-driven Full Stack Web Developer, I bring my
                expertise in both Frontend & Backend, acquired through rigorous
                training at Masai School. With a portfolio showcasing successful
                web applications and four major projects, I have developed
                strong teamwork and communication skills.
              </Text>
            </HStack>

            <HStack
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              spacing={"10px"}
            >
              <Box marginTop={"5px"}>
                <FaReact color="#C651CD" fontSize={"20px"} />
              </Box>
              <Text color={"white"} textAlign={"justify"}>
                Now, I am enthusiastic about applying my talents in a Full Stack
                Web Developer role, contributing to cutting-edge projects and
                creating user-friendly solutions. Let's collaborate to build
                exceptional web experiences and drive innovation in the digital
                realm.
              </Text>
            </HStack>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;

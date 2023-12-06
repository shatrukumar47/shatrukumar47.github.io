import {
  Box,
    Button,
    HStack,
    Heading,
    Stack,
    Text,
    VStack,
  } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaRegPaperPlane } from "react-icons/fa";
import ImageSlider from "./ImageSlider";


const ProjectCard = ({item}) => {


  return (<div data-aos="zoom-in" >
  <Stack
    className="project-card"
    flexDirection={{
      base: "column",
      md: "column",
      lg: "column",
      xl: "column",
    }}
    bg={"white"}
    borderRadius={"11px"}
    boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
    transition={".3s ease-in-out 0s"}
    _hover={{
      transform: "scale(1.02)",
    }}
  >
    <Box>
      <ImageSlider images={item.images} />
    </Box>
    <VStack
      padding={{
        base: "0px 15px 15px 15px",
        md: "0px 30px 30px 30px",
        lg: "0px 30px 30px 30px",
      }}
      spacing={"10px"}
      minH={{base:"350px", md:"350px", lg:"350px", xl:"370px"}}
      justifyContent={"space-between"}
    >
      <Heading
        fontSize={"22px"}
        color={"#C651CD"}
        className="project-title"
      >
        {item.title}
      </Heading>
      <Text className="project-description" textAlign={"justify"}>
        {item.description}
      </Text>
      <VStack>
        <Text
          className="project-tech-stack"
          fontWeight={"bold"}
          color={"#C651CD"}
        >
          Tech Stacks
        </Text>
        <Text fontSize={"15px"}>
          {
            item.techStacks.join(" | ")
          }
        </Text>
      </VStack>
      <HStack spacing={"50px"} marginTop={"20px"}>
        <Button
          className="project-github-link"
          bg={"#0F1624"}
          color={"white"}
          leftIcon={<FaGithub />}
          _hover={{
            background: "black",
          }}
          onClick={() => {
            window.open(
              item.githublink,
              "_blank"
            );
          }}
        >
          Code
        </Button>
        <Button
          className="project-deployed-link"
          colorScheme="green"
          variant={"outline"}
          leftIcon={<FaRegPaperPlane />}
          _hover={{
            color: "white",
            background: "green",
          }}
          onClick={() => {
            window.open(
              item.livelink,
              "_blank"
            );
          }}
        >
          Live
        </Button>
      </HStack>
    </VStack>
  </Stack>
</div>)
}

export default ProjectCard

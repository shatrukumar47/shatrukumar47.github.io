import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaRegPaperPlane } from "react-icons/fa";

//image
import FitQuest from "../Images/FitQuest.png";

const Projects = () => {
  return (
    <Box id="projects" bg={"#1E1842"} padding={"120px 10px 0px 10px"}>
      <HStack justifyContent={"center"} marginBottom={"100px"}>
        <Heading color={"#C651CD"} textAlign={"center"}>
          My
        </Heading>
        <Heading color={"white"} textAlign={"center"}>
          Projects
        </Heading>
      </HStack>
      <Container
        maxW={{ base: "100%", md: "100%", lg: "90%" }}
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={"40px"}
      >
        <VStack
          className="project-card"
          bg={"white"}
          borderRadius={"20px"}
          paddingBottom={"10px"}
          boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
          transition={".3s ease-in-out 0s"}
          _hover={{
            transform: "scale(1.03)",
          }}
        >
          <Image
            width={"100%"}
            src={FitQuest}
            alt="FitQuest"
            borderRadius={"20px 20px 0px 0px"}
          />
          <VStack padding={"20px"} spacing={"10px"}>
            <Heading
              fontSize={"22px"}
              color={"#C651CD"}
              className="project-title"
            >
              FitQuest
            </Heading>
            <Text className="project-description" textAlign={"justify"}>
              FitQuest is a fitness application that aims to help manage user's
              calories by providing various exercises with calculated burned
              calories and helpful tips to help improve their health.
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
                HTML5 | CSS3 | JavaScript | React | Redux | Chakra UI | Thunk |
                Axios | Node Js | Express JS | MongoDB | Mongoose | Bcrypt |
                JsonWebToken{" "}
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
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>

        <VStack
          className="project-card"
          bg={"white"}
          borderRadius={"20px"}
          boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
          transition={".3s ease-in-out 0s"}
          _hover={{
            transform: "scale(1.03)",
          }}
        >
          <Image
            width={"100%"}
            src={FitQuest}
            alt="FitQuest"
            borderRadius={"20px 20px 0px 0px"}
          />
          <VStack padding={"20px"} spacing={"10px"}>
            <Heading
              fontSize={"22px"}
              color={"#C651CD"}
              className="project-title"
            >
              FitQuest
            </Heading>
            <Text className="project-description" textAlign={"justify"}>
              FitQuest is a fitness application that aims to help manage user's
              calories by providing various exercises with calculated burned
              calories and helpful tips to help improve their health.
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
                HTML5 | CSS3 | JavaScript | React | Redux | Chakra UI | Thunk |
                Axios | Node Js | Express JS | MongoDB | Mongoose | Bcrypt |
                JsonWebToken{" "}
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
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>

        <VStack
          className="project-card"
          bg={"white"}
          borderRadius={"20px"}
          boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
          transition={".3s ease-in-out 0s"}
          _hover={{
            transform: "scale(1.03)",
          }}
        >
          <Image
            width={"100%"}
            src={FitQuest}
            alt="FitQuest"
            borderRadius={"20px 20px 0px 0px"}
          />
          <VStack padding={"20px"} spacing={"10px"}>
            <Heading
              fontSize={"22px"}
              color={"#C651CD"}
              className="project-title"
            >
              FitQuest
            </Heading>
            <Text className="project-description" textAlign={"justify"}>
              FitQuest is a fitness application that aims to help manage user's
              calories by providing various exercises with calculated burned
              calories and helpful tips to help improve their health.
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
                HTML5 | CSS3 | JavaScript | React | Redux | Chakra UI | Thunk |
                Axios | Node Js | Express JS | MongoDB | Mongoose | Bcrypt |
                JsonWebToken{" "}
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
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>

        <VStack
          className="project-card"
          bg={"white"}
          borderRadius={"20px"}
          boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
          transition={".3s ease-in-out 0s"}
          _hover={{
            transform: "scale(1.03)",
          }}
        >
          <Image
            width={"100%"}
            src={FitQuest}
            alt="FitQuest"
            borderRadius={"20px 20px 0px 0px"}
          />
          <VStack padding={"20px"} spacing={"10px"}>
            <Heading
              fontSize={"22px"}
              color={"#C651CD"}
              className="project-title"
            >
              FitQuest
            </Heading>
            <Text className="project-description" textAlign={"justify"}>
              FitQuest is a fitness application that aims to help manage user's
              calories by providing various exercises with calculated burned
              calories and helpful tips to help improve their health.
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
                HTML5 | CSS3 | JavaScript | React | Redux | Chakra UI | Thunk |
                Axios | Node Js | Express JS | MongoDB | Mongoose | Bcrypt |
                JsonWebToken{" "}
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
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0F1624"
          fill-opacity="1"
          d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,229.3C672,213,768,203,864,213.3C960,224,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default Projects;

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
import { FaGithub, FaRegPaperPlane } from "react-icons/fa";

//image
import FitQuest from "../Images/FitQuest.png";
import Notes from "../Images/Notes.png";
import PillReminder from "../Images/PillReminder.png";
import Portfolio from "../Images/Portfolio.png";

const Projects = () => {
  return (
    <Box
      id="projects"
      bg={"#1E1842"}
      // padding={"120px 0px 0px 0px"}
    >
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
          maxW={{ base: "95%", md: "90%", lg: "7xl" }}
          display={"flex"}
          flexDirection={"column"}
          gap={"50px"}
        >
          <div data-aos="flip-up">
            <Stack
              className="project-card"
              maxW={{ base: "100%", md: "90%", lg: "100%" }}
              margin={"auto"}
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              bg={"white"}
              borderRadius={"11px"}
              boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
              transition={".3s ease-in-out 0s"}
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Image
                width={{ base: "100%", md: "100%", lg: "700px" }}
                objectFit={"cover"}
                src={FitQuest}
                alt="FitQuest"
                borderRadius={{
                  base: "10px 10px 0px 0px",
                  md: "10px 10px 0px 0px",
                  lg: "10px 0px 0px 10px",
                }}
              />
              <VStack
                padding={{
                  base: "15px 15px",
                  md: "20px 30px",
                  lg: "20px 30px",
                }}
                spacing={"10px"}
                justifyContent={"space-between"}
              >
                <Heading
                  fontSize={"22px"}
                  color={"#C651CD"}
                  className="project-title"
                >
                  FitQuest
                </Heading>
                <Text className="project-description" textAlign={"justify"}>
                  FitQuest is a dynamic fitness application designed to assist
                  users in effectively managing their calorie intake. It offers
                  a wide array of exercises, complete with calculated calories
                  burned and valuable health-improvement tips, empowering users
                  to take control of their fitness journey and enhance their
                  overall well-being.
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
                    HTML5 | CSS3 | JavaScript | React | Redux | Chakra UI |
                    Thunk | Axios | Node Js | Express JS | MongoDB | Mongoose |
                    Bcrypt | JsonWebToken{" "}
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
                        "https://github.com/shatrukumar47/vogue-pocket-8479/tree/main",
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
                        "https://dancing-sundae-d284dd.netlify.app/",
                        "_blank"
                      );
                    }}
                  >
                    Live
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </div>

          <div data-aos="flip-up">
            <Stack
              className="project-card"
              maxW={{ base: "100%", md: "90%", lg: "100%" }}
              margin={"auto"}
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              bg={"white"}
              borderRadius={"11px"}
              boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
              transition={".3s ease-in-out 0s"}
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Image
                width={{ base: "100%", md: "100%", lg: "700px" }}
                // objectFit={"cover"}
                src={Notes}
                alt="Notes"
                borderRadius={{
                  base: "10px 10px 0px 0px",
                  md: "10px 10px 0px 0px",
                  lg: "10px 0px 0px 10px",
                }}
              />
              <VStack
                padding={{
                  base: "15px 15px",
                  md: "20px 30px",
                  lg: "20px 30px",
                }}
                spacing={"10px"}
                justifyContent={"space-between"}
              >
                <Heading
                  fontSize={"22px"}
                  color={"#C651CD"}
                  className="project-title"
                >
                  Notes
                </Heading>
                <Text className="project-description" textAlign={"justify"}>
                  This is a comprehensive Full Stack Notes Taking App
                  encompassing both frontend and backend functionalities. With
                  this application, you can effortlessly create, update, and
                  delete your notes, providing a seamless and efficient
                  note-taking experience.
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
                    HTML5 | CSS3 | JavaScript | React | Redux | Chakra UI |
                    Thunk | Axios | Node Js | Express JS | MongoDB | Mongoose |
                    Bcrypt | JsonWebToken{" "}
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
                        "https://github.com/shatrukumar47/Full-Stack-Notes-Mini-Project",
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
                      window.open("https://notesshatru.netlify.app/", "_blank");
                    }}
                  >
                    Live
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </div>

          <div data-aos="flip-up">
            <Stack
              className="project-card"
              maxW={{ base: "100%", md: "90%", lg: "100%" }}
              margin={"auto"}
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              bg={"white"}
              borderRadius={"11px"}
              boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
              transition={".3s ease-in-out 0s"}
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Image
                width={{ base: "100%", md: "100%", lg: "700px" }}
                objectFit={"cover"}
                src={PillReminder}
                alt="PillAlert"
                borderRadius={{
                  base: "10px 10px 0px 0px",
                  md: "10px 10px 0px 0px",
                  lg: "10px 0px 0px 10px",
                }}
              />
              <VStack
                padding={{
                  base: "15px 15px",
                  md: "20px 30px",
                  lg: "20px 30px",
                }}
                spacing={"10px"}
                justifyContent={"space-between"}
              >
                <Heading
                  fontSize={"22px"}
                  color={"#C651CD"}
                  className="project-title"
                >
                  Pill Alert
                </Heading>
                <Text className="project-description" textAlign={"justify"}>
                  Welcome to Pill Alert! This project is dedicated to
                  simplifying medication management. Our mission is to help
                  users track and manage their medications effectively by
                  setting reminder to take pill on time.
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
                    HTML5 | CSS3 | JavaScript | React | Chakra UI
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
                        "https://github.com/shatrukumar47/unwavering-squirrel-8299",
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
                        "https://tangerine-dusk-0353ff.netlify.app/",
                        "_blank"
                      );
                    }}
                  >
                    Live
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </div>

          <div data-aos="flip-up">
            <Stack
              className="project-card"
              maxW={{ base: "100%", md: "90%", lg: "100%" }}
              margin={"auto"}
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              bg={"white"}
              borderRadius={"11px"}
              boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
              transition={".3s ease-in-out 0s"}
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Image
                width={{ base: "100%", md: "100%", lg: "700px" }}
                objectFit={"cover"}
                src={Portfolio}
                alt="portfolio"
                borderRadius={{
                  base: "10px 10px 0px 0px",
                  md: "10px 10px 0px 0px",
                  lg: "10px 0px 0px 10px",
                }}
              />
              <VStack
                padding={{
                  base: "15px 15px",
                  md: "20px 30px",
                  lg: "20px 30px",
                }}
                spacing={"10px"}
                justifyContent={"space-between"}
              >
                <Heading
                  fontSize={"22px"}
                  color={"#C651CD"}
                  className="project-title"
                >
                  My Portfolio
                </Heading>
                <Text className="project-description" textAlign={"justify"}>
                  Welcome to this meticulously crafted portfolio, a testament to
                  the power of design and frontend development. As you explore
                  its pages, you'll discover a harmonious blend of form and
                  function, where aesthetics meet usability.
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
                    HTML5 | CSS3 | JavaScript | React | Chakra UI
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
                        "https://github.com/shatrukumar47/shatrukumar47.github.io",
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
                      window.open("https://shatrukumar47.github.io/", "_blank");
                    }}
                  >
                    Live
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </div>
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

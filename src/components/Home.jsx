import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import portfolioPic from "./porfolioPic.png";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Hello, World.", "I'm a Full Stack Web Developer."],
      typeSpeed: 50,
      backSpeed: 40,
      cursorChar: "|",
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box id="home" bg={"#0F1624"} color={"white"}>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text as={"span"} fontSize={"30px"} color={"#C651CD"}>
                My name is,
              </Text>
              <br />
              <Text
                id="user-detail-name"
                as={"span"}
                fontWeight={"bold"}
                fontFamily={"'Play', sans-serif"}
                letterSpacing={"3px"}
              >
                SHATRUGHAN KUMAR
              </Text>
              <br />
              <Text fontSize={"30px"} as={"span"} color="#C651CD">
                <span ref={typedRef}></span>
                <style>
                  {`
                    .typed-cursor {
                      color: yellow;
                    }
                  `}
                </style>
              </Text>
            </Heading>
            <Text id="user-detail-intro" color={"white"} fontSize={"lg"}>
              Results-driven{" "}
              <span style={{ fontWeight: "bold", color: "rgb(247,67,67)" }}>
                Full Stack Web Developer
              </span>{" "}
              with proficiency in{" "}
              <span style={{ fontWeight: "bold", color: "rgb(247,67,67)" }}>
                MERN
              </span>
              (React, Node JS, Express JS, MongoDB) stack. Completed{" "}
              <span style={{ fontWeight: "bold", color: "rgb(247,67,67)" }}>
                1200+
              </span>{" "}
              hour web development course at Masai School. Committed to
              delivering exceptional web solutions and collaborating effectively
              within teams.
            </Text>
            <Stack alignItems={"center"}>
              <Button
                href="#resume"
                className="nav-link resume"
                id="resume-link-1"
                color="#C651CD"
                border={"1px solid #C651CD"}
                variant={"outline"}
                transition={"border-radius 0.3s ease-in-out"}
                _hover={{
                  borderRadius: "20px",
                }}
                rightIcon={<FaDownload />}
              >
                Resume
              </Button>
            </Stack>
          </Stack>
          <Flex flex={1} justify={"center"} position={"relative"}>
            <Box
              position={"relative"}
              width={{ base: "80%", md: "80%", lg: "60%" }}
            >
              <div class="avatar">
                <img
                  className="home-img"
                  src={portfolioPic}
                  alt="profile-pic"
                />
              </div>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};
export default Home;

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import portfolioPic from "./porfolioPic.png";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

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

  //Linkedin
  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/shatrughan-kumar-32236625a/",
      "_blank"
    );
  };

  //handleGithub
  const handleGithub = () => {
    window.open("https://github.com/shatrukumar47", "_blank");
  };

  //handleEmail
  const handleEmail = () => {
    console.log("Email");
  };

  //handleResume
  const handleResume = () => {
    const resumeFilename = "Shatrughan-Kumar-Resume.pdf"; // Make sure this matches the filename in the public folder
    const resumeURL =
      process.env.PUBLIC_URL + "/Resume/" + "Shatrughan-Kumar-Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = resumeFilename;
    link.click();
  };

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
              <HStack
                spacing={5}
                px={5}
                marginBottom={"20px"}
                alignItems="flex-start"
                color={"white"}
              >
                <IconButton
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  border={"2px solid #00FFFF"}
                  color={"#00FFFF"}
                  _hover={{
                    bg: "#00FFFF",
                    color: "black",
                    boxShadow: "#00FFFF 0px 0px 10px 5px",
                  }}
                  icon={<FaLinkedinIn size="25px" />}
                  onClick={handleLinkedin}
                />
                <IconButton
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  border={"2px solid #00FFFF"}
                  color={"#00FFFF"}
                  _hover={{
                    bg: "#00FFFF",
                    color: "black",
                    boxShadow: "#00FFFF 0px 0px 10px 5px",
                  }}
                  icon={<BsGithub size="25px" />}
                  onClick={handleGithub}
                />
                <IconButton
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  border={"2px solid #00FFFF"}
                  color={"#00FFFF"}
                  _hover={{
                    bg: "#00FFFF",
                    color: "black",
                    boxShadow: "#00FFFF 0px 0px 10px 5px",
                  }}
                  icon={<FaEnvelope size="22px" />}
                  onClick={handleEmail}
                />
              </HStack>
              <Button
                href="#resume"
                className="nav-link resume"
                id="resume-link-2"
                color="#C651CD"
                border={"1px solid #C651CD"}
                variant={"outline"}
                transition={"border-radius 0.3s ease-in-out"}
                _hover={{
                  borderRadius: "20px",
                }}
                rightIcon={<FaDownload />}
                onClick={handleResume}
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
              <div className="avatar">
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

import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import portfolioPic from "../assets/PortfolioPic/2.png";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import ResumeButton from "../components/ResumeButton";
import { GithubLink, LinkedLink, ResumeDriveLink, ResumeFileName } from "../constants";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Hello, World.", "I'm a Software Development Engineer II"],
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
    window.open(LinkedLink,"_blank");
  };

  //handleGithub
  const handleGithub = () => {
    window.open(GithubLink, "_blank");
  };

  //handleEmail
  const handleEmail = () => {
    const link = document.createElement("a");
    link.href = "mailto:shatrukumar47@gmail.com";
    link.click();
  };

  //handleResume
  const handleResume = () => {
    const resumeURL = process.env.PUBLIC_URL + `/Resume/${ResumeFileName}`;
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = ResumeFileName;
    link.click();
    window.open(ResumeDriveLink,"_blank");
  };

  return (
    <Box
      id="home"
      bg={"linear-gradient(to right, #0f0c29, #302b63, #24243e)"}
      color={"white"}
    >
      <Container maxW={"7xl"}>
        <Stack
          // align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }} mt={-10}>
            <Heading
              as={"h1"}
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
              <span style={{ fontWeight: "bold", color: "rgb(247,67,67)" }}>
                Software Development Engineer II (SDE-2) 
              </span>{" "}
              with{" "}
              <span style={{ fontWeight: "bold", color: "rgb(247,67,67)" }}>
                2.5+ years of experience{" "}
              </span>
              building scalable backend systems, AI-powered search platforms, and distributed processing solutions. Led a team of 2–3 developers while delivering large-
              scale educational platforms serving{" "}
              <span style={{ fontWeight: "bold", color: "rgb(247,67,67)" }}>
                50,000+{" "}
              </span>
              users, processing{" "}
              <span style={{ fontWeight: "bold", color: "rgb(247,67,67)" }}>
                100,000+
              </span>{" "}
                document workflows, and managing{" "}
                <span style={{ fontWeight: "bold", color: "rgb(247,67,67)" }}>
                400+ GB{" "}
              </span>{" "}
              of operational data. Experienced in system design, event-driven architecture, performance optimization, vector search,
              and cloud-based integrations.
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
                  border={"2px solid white"}
                  color={"white"}
                  bg={"#0a66c2"}
                  _hover={{
                    border: "2px solid #0a66c2",
                    boxShadow: "#0a66c2 0px 0px 10px 5px",
                  }}
                  icon={<FaLinkedinIn size="25px" />}
                  onClick={handleLinkedin}
                />
                <IconButton
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  border={"2px solid #e8eaea"}
                  color={"#e8eaea"}
                  bg={"#1d1b1b"}
                  _hover={{
                    border: "2px solid #1d1b1b",
                    boxShadow: "#1d1b1b 0px 0px 10px 5px",
                  }}
                  icon={<BsGithub size="25px" />}
                  onClick={handleGithub}
                />
                <IconButton
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  border={"2px solid white"}
                  color={"white"}
                  bg={"#37AE48"}
                  _hover={{
                    color: "white",
                    border: "2px solid #37AE48",
                    boxShadow: "#37AE48 0px 0px 10px 5px",
                  }}
                  icon={<FaEnvelope size="22px" />}
                  onClick={handleEmail}
                />
              </HStack>
              <Box mt={2}>
                <ResumeButton onClick={handleResume} />
              </Box>
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
                  width={"600px"}
                  height={"600px"}
                  alt="profile-pic"
                  title="shatrughan-kumar-profile-photo"
                />
              </div>
            </Box>
          </Flex>
        </Stack>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1440 120">
        <path
          fill="#1E1842"
          fill-opacity="1"
          d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,229.3C672,213,768,203,864,213.3C960,224,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};
export default Home;

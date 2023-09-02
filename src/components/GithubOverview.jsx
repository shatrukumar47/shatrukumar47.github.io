import { Box, Container, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubOverview = () => {
  return (
    <Box bg={"#0F1624"} padding={"0px 0px 0px 0px"}>
      <div data-aos="fade-up">
        <HStack justifyContent={"center"} marginBottom={"50px"}>
          <Heading color={"#C651CD"} textAlign={"center"}>
            GitHub
          </Heading>
          <Heading color={"white"} textAlign={"center"}>
            Overview
          </Heading>
        </HStack>

        <Container maxW={"8xl"}>
          <div data-aos="zoom-in-up">
            <Box
              bg={"#095c80"}
              marginBottom={"50px"}
              borderRadius={"20px"}
              boxShadow={
                "rgb(84, 25, 178) 0px 15px 25px, rgb(26, 201, 47) 0px 5px 10px"
              }
              transition={".3s ease-in-out 0s"}
              _hover={{
                transform: "scale(1.03)",
              }}
            >
              <Box
                width={{ base: "100%", md: "70%", lg: "70%" }}
                m={"auto"}
                color={"white"}
                padding={{ base: "10px", md: "20px", lg: "20px" }}
                className="react-activity-calendar"
              >
                <GitHubCalendar username="shatrukumar47" />
              </Box>
            </Box>
          </div>

          <Box
            w={"100%"}
            m={"auto"}
            display={"flex"}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            gap={{ base: "30px", md: "30px", lg: "0px" }}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <div data-aos="zoom-in-up">
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=shatrukumar47&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
                id="github-top-langs"
                width={"350px"}
                boxShadow={
                  "rgb(255, 255, 255) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                }
                transition={".3s ease-in-out 0s"}
                _hover={{
                  transform: "scale(1.03)",
                }}
              />
            </div>

            <div data-aos="zoom-in-up">
              <Image
                src="https://github-readme-streak-stats.herokuapp.com/?user=shatrukumar47&theme=dark&hide_border=false"
                id="github-streak-stats"
                boxShadow={
                  "rgb(255, 255, 255) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                }
                transition={".3s ease-in-out 0s"}
                _hover={{
                  transform: "scale(1.03)",
                }}
              />
            </div>

            <div data-aos="zoom-in-up">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=shatrukumar47&theme=dark&hide_border=false&include_all_commits=false&count_private=false"
                id="github-stats-card"
                boxShadow={
                  "rgb(255, 255, 255) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                }
                transition={".3s ease-in-out 0s"}
                _hover={{
                  transform: "scale(1.03)",
                }}
              />
            </div>
            
          </Box>
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

export default GithubOverview;

import { Box, Container, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubOverview = () => {
  return (
    <Box bg={"#0F1624"} padding={"100px 10px 100px 10px"}>
      <HStack justifyContent={"center"} marginBottom={"50px"}>
        <Heading color={"#C651CD"} textAlign={"center"}>
          GitHub
        </Heading>
        <Heading color={"white"} textAlign={"center"}>
          Overview
        </Heading>
      </HStack>

      <Container maxW={"8xl"}>
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
            width={{base:"100%", md:"70%", lg:"70%"}}
            m={"auto"}
            color={"white"}
            padding={{base:"10px", md:"20px", lg:"20px"}}
            className="react-activity-calendar"
          >
            <GitHubCalendar username="shatrukumar47" />
          </Box>
        </Box>
        <Box
          w={"100%"}
          m={"auto"}
          display={"flex"}
          flexDirection={{base:"column", md: "column", lg: "row"}}
          gap={{base:"30px", md: "30px", lg: "0px"}}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
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

          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=shatrukumar47&theme=dark&hide_border=false"
            id="github-stats-card"
            boxShadow={
              "rgb(255, 255, 255) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }
            transition={".3s ease-in-out 0s"}
            _hover={{
              transform: "scale(1.03)",
            }}
          />

          <Image
            src="https://github-readme-stats.vercel.app/api?username=shatrukumar47&theme=dark&hide_border=false&include_all_commits=false&count_private=false"
            id="github-streak-stats"
            boxShadow={
              "rgb(255, 255, 255) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }
            transition={".3s ease-in-out 0s"}
            _hover={{
              transform: "scale(1.03)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default GithubOverview;

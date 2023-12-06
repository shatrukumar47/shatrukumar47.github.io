import { Box, Container, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import SkillCard from "../otherComponents/SkillCard";

//Images
import HTML from "../assets/Images/html.png";
import CSS from "../assets/Images/css.png";
import JavaScript from "../assets/Images/js.png";
import ReactLogo from "../assets/Images/react.png";
import Redux from "../assets/Images/Redux.png";
import Chakra from "../assets/Images/chakra.png";
import Typescript from "../assets/Images/Typescript.png";
import mongoDB from "../assets/Images/mongoDB.png";
import ExpressJS from "../assets/Images/ExpressJS.png";
import nodejs from "../assets/Images/ndoejs.png";
import Postman from "../assets/Images/Postman.png";
import Github from "../assets/Images/Github.png";
import Angular from "../assets/Images/angular.png";
import Tailwind from "../assets/Images/tailwind css.png";
import PromptEngineering from "../assets/Images/prompt engineering.png";
import styledComponent from "../assets/Images/styledcomponent.png";

const techSkills = [
  { title: "HTML", image:HTML},
  { title: "CSS", image: CSS },
  { title: "JavaScript", image: JavaScript },
  { title: "React", image: ReactLogo },
  { title: "Redux", image: Redux },
  { title: "Chakra UI", image: Chakra },
  { title: "Typescript", image: Typescript },
  { title: "Mongo DB", image: mongoDB },
  { title: "Express JS", image: ExpressJS },
  { title: "Node JS", image: nodejs },
  { title: "Postman", image: Postman },
  { title: "Github", image: Github },
  { title: "Angular", image: Angular },
  { title: "Tailwind CSS", image: Tailwind },
  { title: "Prompt Engineering", image: PromptEngineering },
  { title: "styled components", image: styledComponent },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      bg={"#0F1624"}
    >
      <div data-aos="fade-up">
        <HStack justifyContent={"center"} marginBottom={"100px"}>
          <Heading color={"#C651CD"} textAlign={"center"}>
            Technical
          </Heading>
          <Heading color={"white"} textAlign={"center"}>
            Skills
          </Heading>
        </HStack>
        <Container
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(7, 1fr)",
          }}
          gap={"20px"}
          maxW={"95%"}
        >
          {techSkills?.map((item, index) => {
            return (
              <SkillCard key={index} image={item.image} title={item.title} />
            );
          })}
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

export default Skills;

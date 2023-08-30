import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

//Images
import Redux from "../Images/Redux.png";
import Typescript from "../Images/Typescript.png";
import mongoDB from "../Images/mongoDB.png";
import ExpressJS from "../Images/ExpressJS.png";
import Git from "../Images/Git.png";
import Github from "../Images/Github.png";
import Postman from "../Images/Postman.png";

const Skills = () => {
  return (
    <Box id="skills" bg={"#0F1624"} padding={"100px 10px 150px 10px"}>
        <HStack justifyContent={"center"} marginBottom={"100px"}>
          <Heading color={"#C651CD"} textAlign={"center"}>
            Technical
          </Heading>
          <Heading color={"white"} textAlign={"center"}>
            Skills
          </Heading>
        </HStack>
      <Container display={"grid"} gridTemplateColumns={{base: "repeat(2, 1fr)", md:"repeat(4,1fr)", lg:"repeat(7, 1fr)"}} gap={"20px"} maxW={"95%"}>
        
        {/* HTML */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            transition={".3s ease-in-out 0s"}
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src="https://manikantkr-1004.github.io/static/media/HTML.ca57c97f9a27615d4082.png"
              alt="html"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              HTML
            </Text>
          </VStack>
        </Box>

        {/* CSS */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src="https://manikantkr-1004.github.io/static/media/CSS.bea56c054124d4888194.png"
              alt="CSS"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              CSS
            </Text>
          </VStack>
        </Box>

        {/* JavaScript */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src="https://manikantkr-1004.github.io/static/media/javascript.310d665e5ee727f00229.png"
              alt="JS"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              JavaScript
            </Text>
          </VStack>
        </Box>

        {/* React */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={
                "https://manikantkr-1004.github.io/static/media/react.60f87e57897ede715c07.png"
              }
              alt="React"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              React
            </Text>
          </VStack>
        </Box>

        {/* Redux */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={Redux}
              alt="redux"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              Redux
            </Text>
          </VStack>
        </Box>

        {/* Chakra UI */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
            
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={
                "https://manikantkr-1004.github.io/static/media/chakra_ui.4112242f6e4c9a5b203d.png"
              }
              alt="chakra-ui"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              Chakra UI
            </Text>
          </VStack>
        </Box>

        {/* TypeScript */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={Typescript}
              alt="typescript"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              TypeScript
            </Text>
          </VStack>
        </Box>

        {/* Mongo DB */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={mongoDB}
              alt="mongoDB"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              Mongo DB
            </Text>
          </VStack>
        </Box>

        {/* Express JS */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={ExpressJS}
              alt="expressJS"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              Express JS
            </Text>
          </VStack>
        </Box>

        {/* Node JS */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={
                "https://manikantkr-1004.github.io/static/media/nodejs.dbf5d143917b5b366625.png"
              }
              alt="nodeJS"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              Node JS
            </Text>
          </VStack>
        </Box>

        {/* Postman */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={Postman}
              alt="postman"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              Postman
            </Text>
          </VStack>
        </Box>

        {/* Git */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={Git}
              alt="git"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              Git
            </Text>
          </VStack>
        </Box>

        {/* Github */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={Github}
              alt="github"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              Github
            </Text>
          </VStack>
        </Box>

        {/* Styled Components */}
        <Box className="skills-card">
          <VStack
            spacing={"20px"}
            bg={"#1A202C"}
            padding={"30px 0 15px"}
            borderRadius={"10px"}
            textAlign={"center"}
            transition={".3s ease-in-out 0s"}
            boxShadow={
              "0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22)"
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            justifyContent={"space-between"}
            height={"230px"}
          >
            <Image
              w={{base: "118px", md: "118px", lg: "125px"}}
              src={
                "https://manikantkr-1004.github.io/static/media/styled_components.b2a4278ae5017d1bc15f.png"
              }
              alt="styled-component"
              className="skills-card-img"
            />
            <Text className="skills-card-name" color={"white"}>
              styled components
            </Text>
          </VStack>
        </Box>
      </Container>
      
    </Box>
  );
};

export default Skills;

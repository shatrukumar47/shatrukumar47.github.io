import { Box, Text, VStack, HStack, Heading, UnorderedList, ListItem, Divider, Wrap, WrapItem, Spacer, Flex, Collapse, Button } from "@chakra-ui/react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const ExperienceCard = ({ experience }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Box
      bg={"rgba(255, 255, 255, 0.04)"}
      borderRadius={"14px"}
      p={{ base: "20px", md: "28px" }}
      w={"100%"}
      h={"100%"}
      boxShadow={"0 4px 24px rgba(0, 0, 0, 0.12)"}
      backdropFilter={"blur(6px)"}
      border={"1px solid rgba(255, 255, 255, 0.08)"}
      transition={"all 0.15s ease"}
      _hover={{ transform: "translateY(-3px)", border: "2px solid rgba(198, 81, 205, 0.5)" }}
    >
      <VStack align={"flex-start"} spacing={3}>
        <Box w={"100%"}>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "flex-start", md: "center" }} gap={{ base: 4, md: 0 }}>
            {/* Left side: Company and Role */}
            <VStack align="flex-start" spacing={1.5}>
              <HStack spacing={2} align={"baseline"}>
                <FaBriefcase size={13} color={"#C651CD"} />
                <Text color={"#C651CD"} fontSize={"sm"} textAlign={"left"} fontWeight={600}>
                  {experience.company}
                </Text>
              </HStack>
              <Text color={"gray.500"} fontSize={"xs"} textAlign={"left"} pl={5} size={"md"}>
                {experience.role}
              </Text>
            </VStack>

            {/* Right side: Location and Duration */}
            <VStack align={{ base: "flex-start", md: "flex-end" }} spacing={1.5} color={"gray.500"} fontSize={"xs"} pl={{ base: 5, md: 0 }}>
              <HStack spacing={1.5} color={"#C651CD"}>
                <FaMapMarkerAlt size={11} />
                <Text>{experience.location}</Text>
              </HStack>
              <HStack spacing={1.5}>
                <FaCalendarAlt size={11} />
                <Text>{experience.duration}</Text>
              </HStack>
            </VStack>
          </Flex>
        </Box>

        <Divider borderColor={"rgba(255, 255, 255, 0.08)"} />

        <Collapse startingHeight={140} in={show} style={{ width: "100%" }}>
          <VStack align={"flex-start"} spacing={5} w={"100%"}>
          {experience.projects.map((project, idx) => (
            <Box key={idx} w={"100%"}>
              <Heading size={"xs"} textAlign={"left"} color={"white"} fontWeight={600} mb={4}>
                Project : {project.title}
              </Heading>
              <Wrap spacing={2} mb={3}>
                {project.techStacks.map((tech, tIdx) => (
                  <WrapItem key={tIdx}>
                    <Box
                      bg={"rgba(255, 255, 255, 0.06)"}
                      border={"1px solid rgba(255, 255, 255, 0.1)"}
                      borderRadius={"6px"}
                      px={2.5}
                      py={0.5}
                    >
                      <Text fontSize={"xs"} color={"gray.400"}>
                        {tech}
                      </Text>
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>

              <UnorderedList color={"gray.300"} spacing={1.5} textAlign={"left"}>
                {project.responsibilities.map((resp, rIdx) => (
                  <ListItem key={rIdx} fontSize={"sm"} lineHeight={1.7}>
                    {resp}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
          </VStack>
        </Collapse>

        <Flex w="100%" justify="center" mt={2}>
          <Button
            onClick={handleToggle}
            variant="ghost"
            size="sm"
            color="#C651CD"
            rightIcon={show ? <FaChevronUp /> : <FaChevronDown />}
            _hover={{ bg: "rgba(198, 81, 205, 0.1)" }}
            _active={{ bg: "rgba(198, 81, 205, 0.2)" }}
          >
            {show ? "View Less" : "View More"}
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ExperienceCard;
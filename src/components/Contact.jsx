import React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import {
  FaEnvelope,
  FaHeart,
  FaLinkedinIn,
  FaLongArrowAltRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { ArrowForwardIcon, PhoneIcon } from "@chakra-ui/icons";

const Contact = () => {
  // <div id="contact">
  //   <a href="#" id='contact-github'>Github</a>
  //   <a href="#" id='contact-linkedin'>Linkedin</a>
  //   <a href="#" id='contact-phone'>Phone</a>
  //   <a href="#" id='contact-email'>Email</a>
  // </div>
  return (
    <Container
      bg={"#1E1842"}
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Box
          bg="#1E1842"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem margin={"auto"}>
                <Box>
                  <Heading mt={{ sm: 3, md: 3, lg: 6 }} color="white">
                    REACH OUT TO ME!
                  </Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <HStack>
                        <MdPhone color="#F74343" size="20px" />
                        <Text size="md" color="#DCE2FF">
                          +91-8858903109
                        </Text>
                      </HStack>
                      <HStack>
                        <MdEmail color="#F74343" size="20px" />
                        <Text size="md" color="#DCE2FF">
                          shatrukumar47@gmail.com
                        </Text>
                      </HStack>
                      <HStack>
                        <MdLocationOn color="#F74343" size="20px" />
                        <Text size="md" color="#DCE2FF">
                          Noida, Uttar Pradesh, India
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                    color={"white"}
                  >
                    <IconButton
                      variant="ghost"
                      size="lg"
                      color={"#C651CD"}
                      isRound={true}
                      _hover={{ bg: "#F74343", color: "white" }}
                      icon={<FaLinkedinIn size="28px" />}
                    />
                    <IconButton
                      variant="ghost"
                      size="lg"
                      color={"#C651CD"}
                      isRound={true}
                      _hover={{ bg: "#F74343", color: "white" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      variant="ghost"
                      size="lg"
                      color={"#C651CD"}
                      isRound={true}
                      _hover={{ bg: "#F74343", color: "white" }}
                      icon={<FaPhoneAlt size="28px" />}
                    />
                    <IconButton
                      variant="ghost"
                      size="lg"
                      color={"#C651CD"}
                      isRound={true}
                      _hover={{ bg: "#F74343", color: "white" }}
                      icon={<FaEnvelope size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem margin={"auto"}>
                <Box
                  bg="white"
                  borderRadius="lg"
                  boxShadow={
                    "rgb(84, 25, 178) 0px 15px 25px, rgb(26, 201, 47) 0px 5px 10px"
                  }
                  width={"400px"}
                >
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input
                            type="text"
                            size="md"
                            placeholder="Your Name"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input
                            type="text"
                            size="md"
                            placeholder="Your Email"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="outline"
                          border="1px solid #F74343"
                          color="#F74343"
                          transition={"border-radius 0.3s ease-in-out"}
                          _hover={{
                            borderRadius: "20px",
                          }}
                          rightIcon={<ArrowForwardIcon />}
                        >
                          Send
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
      <HStack marginBottom={"20px"} color={"white"}>
        <Text>Made with </Text> <FaHeart color="red" /> <Text>By</Text>{" "}
        <Text color={"#C651CD"}>Shatrughan Kumar</Text>
      </HStack>
    </Container>
  );
};

export default Contact;

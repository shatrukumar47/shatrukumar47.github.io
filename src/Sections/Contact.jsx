import React, { useRef, useState } from "react";
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
  Image,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaEnvelope, FaHeart, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import robotGif from "./robotGif.gif";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  //Toast feature
  const toast = useToast();

  //handleChange
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      checkEmailValidation(value);
    }
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //checkEmailValidation
  const checkEmailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const msg = emailRegex.test(email) ? "" : "enter valid email address";
    setEmailError(msg);
  };

  // handleSendBTN
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInput?.name &&
      userInput?.email &&
      !emailError &&
      userInput?.message
    ) {
      setIsLoading(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_serviceID,
          process.env.REACT_APP_templateID,
          form.current,
          process.env.REACT_APP_publicKey
        )
        .then(
          (result) => {
            console.log(result.text);
            toast({
              title: `Message Sent`,
              description:
                "Thank you for reaching out. I'll get back to you shortly.",
              position: "top",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            setIsLoading(false);
            setUserInput({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
            toast({
              title: `Network error`,
              description:
                "Something went wrong. Sorry for your inconvenience. Please contact me using other provided sources.",
              position: "top",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            setIsLoading(false);
          }
        );
    }
  };

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
    const link = document.createElement("a");
    link.href = "mailto:shatrukumar47@gmail.com";
    link.click();
  };

  //handlePhone
  const handlePhone = () => {
    const link = document.createElement("a");
    link.href = "tel:+918858903109";
    link.click();
  };

  return (
    <Container
      id="contact"
      bg={"black"}
      maxW="full"
      centerContent
      overflow="hidden"
    >
      <div data-aos="fade-up">
        <Flex>
          <Box
            bg="#1E1842"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
            boxShadow={"rgb(26, 194, 228) 0px 5px 10px 10px"}
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
                          <Text id="contact-phone" size="md" color="#DCE2FF">
                            +91-8858903109
                          </Text>
                        </HStack>
                        <HStack>
                          <MdEmail color="#F74343" size="20px" />
                          <Text id="contact-email" size="md" color="#DCE2FF">
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
                        id="contact-linkedin"
                        variant="ghost"
                        size="lg"
                        _hover={{ bg: "#0a66c2", color: "white" }}
                        color="#0a66c2"
                        icon={<FaLinkedinIn size="28px" />}
                        onClick={handleLinkedin}
                      />
                      <IconButton
                        id="contact-github"
                        variant="ghost"
                        size="lg"
                        color={"white"}
                        isRound={true}
                        _hover={{ bg: "white", color: "black" }}
                        icon={<BsGithub size="28px" />}
                        onClick={handleGithub}
                      />
                      <IconButton
                        variant="ghost"
                        size="lg"
                        color={"#37AE48"}
                        isRound={true}
                        _hover={{ bg: "#37AE48", color: "white" }}
                        icon={<FaPhoneAlt size="28px" />}
                        onClick={handlePhone}
                      />
                      <IconButton
                        variant="ghost"
                        size="lg"
                        color={"#0FC2C5"}
                        // isRound={true}
                        _hover={{ bg: "#0FC2C5", color: "white" }}
                        icon={<FaEnvelope size="28px" />}
                        onClick={handleEmail}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <div data-aos="flip-right">
                  <WrapItem margin={"auto"}>
                    <Box
                      bg="white"
                      borderRadius="lg"
                      boxShadow={
                        "rgb(84, 25, 178) 0px 15px 25px, rgb(26, 201, 47) 0px 5px 10px"
                      }
                      width={{ base: "400px", md: "600px", lg: "400px" }}
                    >
                      <Box m={8} color="#0B0E3F">
                        <form
                          ref={form}
                          onSubmit={handleSubmit}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                          }}
                        >
                          <FormControl>
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <BsPerson color="gray.800" />
                              </InputLeftElement>
                              <Input
                                id="full-name"
                                type="text"
                                name="name"
                                value={userInput?.name}
                                size="md"
                                placeholder="Your Name"
                                onChange={handleChange}
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl>
                            <FormLabel>Email</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <MdOutlineEmail color="gray.800" />
                              </InputLeftElement>
                              <Input
                                id="email"
                                type="email"
                                name="email"
                                value={userInput?.email}
                                size="md"
                                placeholder="Your Email"
                                required
                                onChange={handleChange}
                              />
                            </InputGroup>
                            {emailError && (
                              <Text color={"red"} align={"left"}>
                                {emailError}
                              </Text>
                            )}
                          </FormControl>
                          <FormControl>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              id="message"
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: "gray.300",
                              }}
                              placeholder="message"
                              name="message"
                              value={userInput?.message}
                              required
                              onChange={handleChange}
                            />
                          </FormControl>
                          <FormControl id="submit" float="right">
                            <Button
                              type="submit"
                              variant="outline"
                              border="1px solid #F74343"
                              color="#F74343"
                              transition={"border-radius 0.3s ease-in-out"}
                              _hover={{
                                borderRadius: "20px",
                              }}
                              rightIcon={<ArrowForwardIcon />}
                              isDisabled={isLoading}
                              isLoading={isLoading}
                            >
                              Send
                            </Button>
                          </FormControl>
                        </form>
                      </Box>
                    </Box>
                  </WrapItem>
                </div>
              </Wrap>
            </Box>
          </Box>
        </Flex>
        <VStack marginBottom={"30px"}>
          <HStack color={"white"} justifyContent={"center"}>
            <Text>Made with </Text> <FaHeart className="contact-heart-icon" />{" "}
            <Text>By</Text> <Text color={"#C651CD"}>Shatrughan Kumar</Text>
          </HStack>
        </VStack>
      </div>
    </Container>
  );
};

export default Contact;

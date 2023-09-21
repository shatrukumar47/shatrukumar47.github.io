import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
  useColorModeValue,
  Container,
  DrawerFooter,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FaCogs,
  FaDesktop,
  FaDownload,
  FaGithub,
  FaHeart,
  FaHome,
  FaLinkedinIn,
  FaPhoneAlt,
  FaUserTie,
} from "react-icons/fa";
import robotGif from "./robotGif.gif";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const bgColor = useColorModeValue("black", "black");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  //Navbar Sticky
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
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

  //handleResumeDownload
  const handleResume = () => {
    const resumeFilename = "Shatrughan-Kumar-Resume.pdf"; // Make sure this matches the filename in the public folder
    const resumeURL =
      process.env.PUBLIC_URL + "/Resume/" + "Shatrughan-Kumar-Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = resumeFilename;
    link.click();
    window.open(
      "https://drive.google.com/file/d/1sMl6Y29p9labjv5Z55Dep-PFPFG3Opch/view",
      "_blank"
    );
  };

  return (
    <Box
      id="nav-menu"
      paddingTop={"5px"}
      style={{ position: "sticky", top: 0, zIndex: 999 }}
      className={scroll ? "active-scroll" : ""}
    >
      <Container
        maxW={"8xl"}
        fontWeight={"bold"}
        letterSpacing={"1px"}
        color={"#00FFFF"}
      >
        <HStack
          justify="space-between"
          padding={"15px"}
          paddingLeft={{ base: "10px", md: "10px", lg: "60px" }}
          paddingRight={{ base: "10px", md: "10px", lg: "60px" }}
        >
          <HamburgerIcon
            fontSize={"30px"}
            display={{ base: "block", md: "none", lg: "none" }}
            onClick={onOpen}
          />
          <HStack
            spacing={"15px"}
            marginLeft={{ base: "30px", md: "30px", lg: "20px" }}
          >
            <FaLinkedinIn className="nav-icon" onClick={handleLinkedin} />
            <FaGithub className="nav-icon" onClick={handleGithub} />
          </HStack>
          <HStack
            display={{ base: "none", md: "flex", lg: "flex" }}
            spacing={{ base: "10px", md: "15px", lg: "20px" }}
          >
            <Link
              activeClass={"active"}
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
              className="nav-link home"
            >
              Home
            </Link>
            <Link
              activeClass={"active"}
              spy={true}
              to="about"
              smooth={true}
              offset={-100}
              delay={0}
              duration={0}
              className="nav-link home"
            >
              About
            </Link>
            <Link
              activeClass={"active"}
              spy={true}
              to="skills"
              smooth={true}
              offset={-100}
              delay={0}
              duration={0}
              className="nav-link home"
            >
              Skills
            </Link>
            <Link
              activeClass={"active"}
              spy={true}
              to="projects"
              smooth={true}
              offset={-100}
              delay={0}
              duration={0}
              className="nav-link home"
            >
              Projects
            </Link>
            <Link
              activeClass={"active"}
              spy={true}
              to="contact"
              smooth={true}
              offset={-100}
              delay={0}
              duration={0}
              className="nav-link home"
            >
              Contact
            </Link>
            <Button
              href="#resume"
              className="nav-link resume"
              id="resume-button-1"
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
          </HStack>

          {/* <----------------------Burger Menu-------------------------------> */}
          <Drawer
            placement={placement}
            onClose={onClose}
            isOpen={isOpen}
            size={"xs"}
          >
            <DrawerOverlay />
            <DrawerContent bg={bgColor}>
              <DrawerHeader
                color={"#00FFFF"}
                borderBottomWidth="1px"
                borderBottomColor={"#00FFFF"}
              >
                Shatrughan Kumar
              </DrawerHeader>
              <DrawerCloseButton color="#00FFFF" />
              <DrawerBody>
                <VStack
                  color={"white"}
                  fontWeight={"500"}
                  align={"flex-start"}
                  fontSize={"22px"}
                >
                  <HStack spacing={"20px"}>
                    <FaHome color="#00FFFF" />
                    <Link
                      activeClass={"active"}
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={0}
                      className="nav-link home"
                      onClick={() => onClose()}
                    >
                      Home
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaUserTie color="#00FFFF" />
                    <Link
                      activeClass={"active"}
                      spy={true}
                      to="about"
                      smooth={true}
                      offset={-100}
                      delay={0}
                      duration={0}
                      className="nav-link home"
                      onClick={() => onClose()}
                    >
                      About
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaCogs color="#00FFFF" />
                    <Link
                      activeClass={"active"}
                      spy={true}
                      to="skills"
                      smooth={true}
                      offset={-100}
                      delay={0}
                      duration={0}
                      className="nav-link home"
                      onClick={() => onClose()}
                    >
                      Skills
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaDesktop color="#00FFFF" />
                    <Link
                      activeClass={"active"}
                      spy={true}
                      to="projects"
                      smooth={true}
                      offset={-100}
                      delay={0}
                      duration={0}
                      className="nav-link home"
                      onClick={() => onClose()}
                    >
                      Projects
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaPhoneAlt color="#00FFFF" />
                    <Link
                      activeClass={"active"}
                      spy={true}
                      to="contact"
                      smooth={true}
                      offset={-150}
                      delay={0}
                      duration={0}
                      className="nav-link home"
                      onClick={() => onClose()}
                    >
                      Contact
                    </Link>
                  </HStack>
                </VStack>
              </DrawerBody>
              <DrawerFooter color={"#00FFFF"}>
                <VStack spacing={0}>
                  <Image src={robotGif} />
                  <HStack color={"white"} fontSize={"10px"}>
                    <Text>Made with</Text> <FaHeart color="red" />
                    <Text>By</Text>
                    <Text color={"#C651CD"}>Shatrughan Kumar</Text>
                  </HStack>
                </VStack>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;

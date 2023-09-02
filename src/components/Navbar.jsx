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
  Link,
  VStack,
  useDisclosure,
  useColorModeValue,
  Container,
  DrawerFooter,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FaCogs,
  FaDesktop,
  FaDownload,
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaPhoneAlt,
  FaUserTie,
} from "react-icons/fa";
import robotGif from "./robotGif.gif";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const bgColor = useColorModeValue("black", "black");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  const [activeLink, setActiveLink] = useState("home");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  //Navbar Sticky
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
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
            display={{ base: "flex", md: "flex", lg: "flex" }}
            spacing={{ base: "10px", md: "15px", lg: "20px" }}
          >
            <Link
              display={{ base: "none", md: "flex", lg: "flex" }}
              href="#home"
              className={`nav-link home ${
                activeLink === "home" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
            <Link
              display={{ base: "none", md: "flex", lg: "flex" }}
              href="#about"
              className={`nav-link home ${
                activeLink === "about" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("about")}
            >
              About
            </Link>
            <Link
              display={{ base: "none", md: "flex", lg: "flex" }}
              href="#skills"
              className={`nav-link home ${
                activeLink === "skills" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("skills")}
            >
              Skills
            </Link>
            <Link
              display={{ base: "none", md: "flex", lg: "flex" }}
              href="#projects"
              className={`nav-link home ${
                activeLink === "project" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("project")}
            >
              Projects
            </Link>
            <Link
              display={{ base: "none", md: "flex", lg: "flex" }}
              href="#contact"
              className={`nav-link home ${
                activeLink === "contact" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("contact")}
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
                      href="#home"
                      className={`nav-link home ${
                        activeLink === "home" ? "active" : ""
                      }`}
                      onClick={() => {
                        handleLinkClick("home");
                        onClose();
                      }}
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaUserTie color="#00FFFF" />
                    <Link
                      href="#about"
                      className={`nav-link about ${
                        activeLink === "about" ? "active" : ""
                      }`}
                      onClick={() => {
                        handleLinkClick("about");
                        onClose();
                      }}
                    >
                      About
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaCogs color="#00FFFF" />
                    <Link
                      href="#skills"
                      className={`nav-link skills ${
                        activeLink === "skills" ? "active" : ""
                      }`}
                      onClick={() => {
                        handleLinkClick("skills");
                        onClose();
                      }}
                    >
                      Skills
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaDesktop color="#00FFFF" />
                    <Link
                      href="#projects"
                      className={`nav-link projects ${
                        activeLink === "project" ? "active" : ""
                      }`}
                      onClick={() => {
                        handleLinkClick("project");
                        onClose();
                      }}
                    >
                      Projects
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaPhoneAlt color="#00FFFF" />
                    <Link
                      href="#contact"
                      className={`nav-link contact ${
                        activeLink === "contact" ? "active" : ""
                      }`}
                      onClick={() => {
                        handleLinkClick("contact");
                        onClose();
                      }}
                    >
                      Contact
                    </Link>
                  </HStack>
                </VStack>
              </DrawerBody>
              <DrawerFooter color={"#00FFFF"}>
                <Image src={robotGif} />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;

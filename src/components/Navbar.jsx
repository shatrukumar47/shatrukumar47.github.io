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
import "./Navbar.module.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const bgColor = useColorModeValue("black", "black");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  //Navbar Sticky
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <Box
      id="nav-menu"
      paddingTop={"5px"}
      style={{ position: "sticky", top: 0, zIndex: 999 }}
      className={scroll ? "active-scroll" : ""}
    >
      <Container maxW={"8xl"}>
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
            <FaLinkedinIn className="nav-icon" />
            <FaGithub className="nav-icon" />
          </HStack>
          <HStack
            display={{ base: "flex", md: "flex", lg: "flex" }}
            spacing={{ base: "10px", md: "15px", lg: "20px" }}
          >
            <Link
              display={{ base: "none", md: "flex", lg: "flex" }}
              href="#home"
              className="nav-link home"
            >
              Home
            </Link>
            <Link
              display={{ base: "none", md: "flex", lg: "flex" }}
              href="#about"
              className="nav-link about"
            >
              About
            </Link>
            <Link
              display={{ base: "none", md: "flex", lg: "flex" }}
              href="#skills"
              className="nav-link skills"
            >
              Skills
            </Link>
            <Link
              display={{ base: "none", md: "flex", lg: "flex" }}
              href="#projects"
              className="nav-link projects"
            >
              Projects
            </Link>
            <Link
              display={{ base: "none", md: "flex", lg: "flex" }}
              href="#contact"
              className="nav-link contact"
            >
              Contact
            </Link>
            <Button
              href="#resume"
              className="nav-link resume"
              id="resume-link-1"
              color="#C651CD"
              border={"1px solid #C651CD"}
              variant={"outline"}
              transition={"border-radius 0.3s ease-in-out"}
              _hover={{
                borderRadius: "20px",
              }}
              rightIcon={<FaDownload />}
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
                color={"green.400"}
                borderBottomWidth="1px"
                borderBottomColor={"green.400"}
              >
                Shatrughan Kumar
              </DrawerHeader>
              <DrawerCloseButton color="#41A86C" />
              <DrawerBody>
                <VStack
                  color={"white"}
                  fontWeight={"500"}
                  align={"flex-start"}
                  fontSize={"22px"}
                >
                  <HStack spacing={"20px"}>
                    <FaHome color="#41A86C" />
                    <Link href="#home" className="nav-link home">
                      {" "}
                      Home{" "}
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaUserTie color="#41A86C" />
                    <Link href="#about" className="nav-link about">
                      About
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaCogs color="#41A86C" />
                    <Link href="#skills" className="nav-link skills">
                      Skills
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaDesktop color="#41A86C" />
                    <Link href="#projects" className="nav-link projects">
                      Projects
                    </Link>
                  </HStack>
                  <HStack spacing={"20px"}>
                    <FaPhoneAlt color="#41A86C" />
                    <Link href="#contact" className="nav-link contact">
                      Contact
                    </Link>
                  </HStack>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;

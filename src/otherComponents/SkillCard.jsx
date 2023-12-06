import { Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const SkillCard = ({image, title}) => {
    return (
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
          color={"white"}
        >
          <Image
            w={{ base: "118px", md: "118px", lg: "125px" }}
            src={image}
            alt={title}
            className="skills-card-img"
          />
          <Text className="skills-card-name">
            {title}
          </Text>
        </VStack>
      </Box>
      )
}

export default SkillCard

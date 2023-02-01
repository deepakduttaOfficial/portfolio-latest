import React from "react";
import { Box, Container, Image, Stack, Text } from "@chakra-ui/react";
import SectionContainer from "../sectionContainer";

const AboutSection = () => {
  const data = {
    heading: "About me😎",
    subHeading: "Take a closer look at who I am and what I stand for.",
  };
  return (
    <SectionContainer {...data} opacity="0.9">
      <Stack alignItems="center" w="full" mt="5">
        <Image
          borderRadius="full"
          boxSize="130px"
          src={
            "https://github.com/deepakduttaOfficial/asstes/blob/master/portfolioV2/my_image.jpg?raw=true"
          }
          alt="Dan Abramov"
        />
      </Stack>
      <Container maxW="2xl" my="10">
        <Text fontWeight="normal" fontFamily="Poppins">
          I am Deepak Dutta, a full-stack JavaScript developer with hands-on
          experience in developing web applications. I am currently pursuing a
          Computer Science degree at Coochbehar College and am constantly
          seeking new challenges to improve my skills. My experience with the
          MERN stack has allowed me to develop over 20 landing pages and Full
          Stack, such as jobcy and an online cake store etc. demonstrating my
          ability to bring ideas to life. In my free time, I enjoy playing
          cricket, which helps me to relax and recharge.
        </Text>
      </Container>
    </SectionContainer>
  );
};

export default AboutSection;

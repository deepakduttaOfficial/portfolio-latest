import React from "react";
import {
  Container,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import SectionContainer from "../sectionContainer";
// Icons
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IconWrapper } from "./style";

const AboutSection = () => {
  const toast = useToast();
  const data = {
    heading: "About me😎",
    subHeading: "Take a closer look at who I am and what I stand for.",
  };

  const socialLink = [
    {
      icon: BsGithub,
      link: "https://github.com/deepakduttaOfficial",
    },
    {
      icon: BsLinkedin,
      link: "https://www.linkedin.com/in/deepak-dutta-5228a9228/",
    },
    {
      icon: BsInstagram,
      link: "https://www.instagram.com/coder_deepak/",
    },
    {
      icon: BsTwitter,
      link: "https://twitter.com/Coderdeepak",
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText("deepakdutta752@gmail.com");
    toast({
      status: "success",
      duration: "10000",
      isClosable: true,
      position: "top-right",
      title: "Email successfully copied to clipboard",
    });
  };

  return (
    <SectionContainer {...data} opacity="0.9" id="aboutme">
      <Stack alignItems="center" w="full" mt="5">
        <Image
          borderRadius="full"
          boxSize="130px"
          bgColor="gray.400"
          src={
            "https://github.com/deepakduttaOfficial/asstes/blob/master/portfolioV2/my_image.jpg?raw=true"
          }
          alt="Dan Abramov"
        />
      </Stack>
      <HStack justifyContent="center" my="5">
        {socialLink.map((social, index) => (
          <IconWrapper Icon={social.icon} key={index} link={social.link} />
        ))}
        <IconWrapper Icon={MdEmail} onClick={copyToClipboard} />
      </HStack>
      <Container maxW="2xl">
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

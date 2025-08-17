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
import { myImage } from "assets";

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
          src={myImage}
          alt="Deepak Dutta"
          // width={110}
          // height={110}
          style={{
            aspectRatio: 1 / 1,
          }}
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
          I am Deepak Dutta, a full-stack JavaScript developer with around 4
          years of experience, specialising in React Native for building
          cross-platform mobile applications on Android and iOS. I have worked
          on mobile apps such as the Veera Health app, where I developed
          features like meal review with AI, product modules, and background
          notifications. I have also contributed to other apps, including a
          crypto wallet UI and a stealth project with advanced onboarding and
          reporting flows. 
          <br/>
          In addition to mobile, I have built web platforms
          like Iksana and Sarika Eyewear, focusing on performance and
          user-friendly design. My work mainly revolves around creating reliable
          applications and delivering solutions that work smoothly across
          devices.
        </Text>
      </Container>
    </SectionContainer>
  );
};

export default AboutSection;

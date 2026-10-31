import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { myImage } from "assets";
import SectionContainer from "../sectionContainer";
import { IconWrapper } from "./style";

const socialLinks = [
  {
    icon: BsGithub,
    label: "Visit Deepak Dutta on GitHub",
    link: "https://github.com/deepakduttaOfficial",
  },
  {
    icon: BsLinkedin,
    label: "Visit Deepak Dutta on LinkedIn",
    link: "https://www.linkedin.com/in/deepak-dutta-5228a9228/",
  },
  {
    icon: BsInstagram,
    label: "Visit Deepak Dutta on Instagram",
    link: "https://www.instagram.com/coder_deepak/",
  },
  {
    icon: BsTwitter,
    label: "Visit Deepak Dutta on Twitter",
    link: "https://twitter.com/Coderdeepak",
  },
];

const AboutSection = () => {
  const toast = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("deepakdutta752@gmail.com");
      toast({
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        title: "Email successfully copied to clipboard",
      });
    } catch {
      toast({
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        title: "Email could not be copied",
      });
    }
  };

  return (
    <SectionContainer
      id="aboutme"
      sectionNumber="02"
      heading="About me"
      subHeading="Take a closer look at who I am and what I stand for."
      tone="sand"
    >
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "minmax(240px, 0.72fr) 1.28fr",
        }}
        gap={{ base: "12", lg: "16" }}
      >
        <Stack spacing="6">
          <Box
            maxW={{ base: "sm", lg: "none" }}
            border="1px solid"
            borderColor="line"
            p="3"
            bg="paper"
          >
            <Image
              src={myImage}
              alt="Deepak Dutta"
              loading="lazy"
              decoding="async"
              w="full"
              style={{ aspectRatio: "4 / 5" }}
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
          <Flex gap="3" wrap="wrap">
            {socialLinks.map((social) => (
              <IconWrapper
                key={social.label}
                Icon={social.icon}
                label={social.label}
                link={social.link}
              />
            ))}
            <IconWrapper
              Icon={MdEmail}
              label="Copy Deepak Dutta's email address"
              onClick={copyToClipboard}
            />
          </Flex>
        </Stack>

        <Stack spacing="8">
          <Heading
            as="h3"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight="1.08"
            letterSpacing="-0.04em"
            fontWeight="500"
          >
            Building reliable products across mobile and web.
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="8">
            <Text
              color="muted"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.85"
            >
              I am Deepak Dutta, a full-stack JavaScript developer with around 4
              years of experience, specialising in React Native for building
              cross-platform mobile applications on Android and iOS. I have
              worked on mobile apps such as the Veera Health app, where I
              developed features like meal review with AI, product modules, and
              background notifications. I have also contributed to other apps,
              including a crypto wallet UI and a stealth project with advanced
              onboarding and reporting flows.
            </Text>
            <Text
              color="muted"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.85"
            >
              In addition to mobile, I have built web platforms like Iksana and
              Sarika Eyewear, focusing on performance and user-friendly design.
              My work mainly revolves around creating reliable applications and
              delivering solutions that work smoothly across devices.
            </Text>
          </SimpleGrid>
        </Stack>
      </Grid>
    </SectionContainer>
  );
};

export default AboutSection;

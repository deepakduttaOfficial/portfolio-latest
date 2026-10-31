import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { myImage } from "assets";
import { IconWrapper } from "./style";

const socialLinks = [
  {
    icon: BsGithub,
    name: "GitHub",
    label: "Visit Deepak Dutta on GitHub",
    link: "https://github.com/deepakduttaOfficial",
  },
  {
    icon: BsLinkedin,
    name: "LinkedIn",
    label: "Visit Deepak Dutta on LinkedIn",
    link: "https://www.linkedin.com/in/deepak-dutta-5228a9228/",
  },
  {
    icon: BsInstagram,
    name: "Instagram",
    label: "Visit Deepak Dutta on Instagram",
    link: "https://www.instagram.com/coder_deepak/",
  },
  {
    icon: BsTwitter,
    name: "Twitter",
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
    <Box
      as="section"
      id="aboutme"
      className="technical-grid grain"
      position="relative"
      scrollMarginTop="5rem"
      overflow="hidden"
      bg="canvas"
      borderBottom="1px solid"
      borderColor="line"
    >
      <Container maxW="8xl" position="relative" py={{ base: "24", md: "32", xl: "36" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(12, minmax(0, 1fr))" }}
          gap={{ base: "14", lg: "8", xl: "14" }}
          alignItems="start"
        >
          <Stack gridColumn={{ lg: "1 / 6" }} spacing={{ base: "9", md: "12" }}>
            <Text color="accent" fontFamily="mono" fontSize="xs" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase">
              02 — Profile / human layer
            </Text>
            <Heading
              as="h2"
              color="ivory"
              fontSize={{ base: "5xl", md: "7xl", xl: "8xl" }}
              lineHeight="0.88"
              letterSpacing="-0.07em"
              textTransform="uppercase"
            >
              About the
              <Box as="span" display="block" color="transparent" sx={{ WebkitTextStroke: "1px var(--ivory)" }}>
                builder.
              </Box>
            </Heading>

            <Box position="relative" maxW={{ base: "md", lg: "none" }}>
              <Box
                aria-hidden="true"
                position="absolute"
                top="-4"
                left="-4"
                w="28%"
                h="38%"
                borderTop="1px solid"
                borderLeft="1px solid"
                borderColor="accent"
              />
              <Box bg="panel" border="1px solid" borderColor="line" p={{ base: "3", md: "4" }}>
                <Image
                  src={myImage}
                  alt="Deepak Dutta outdoors"
                  loading="lazy"
                  decoding="async"
                  w="full"
                  style={{ aspectRatio: "4 / 5" }}
                  objectFit="cover"
                  objectPosition="center"
                  filter="saturate(0.78) contrast(1.06)"
                />
              </Box>
              <Text
                position="absolute"
                right="-2"
                bottom="-6"
                px="3"
                py="2"
                bg="accent"
                color="canvas"
                fontFamily="mono"
                fontSize="9px"
                fontWeight="700"
                letterSpacing="0.12em"
                textTransform="uppercase"
              >
                Frame / DD-01
              </Text>
            </Box>
          </Stack>

          <Stack gridColumn={{ lg: "7 / 13" }} spacing={{ base: "10", md: "12" }} pt={{ lg: "24" }}>
            <Heading
              as="h3"
              maxW="3xl"
              color="ivory"
              fontFamily="body"
              fontSize={{ base: "3xl", md: "5xl", xl: "6xl" }}
              lineHeight="1.08"
              letterSpacing="-0.045em"
              fontWeight="500"
            >
              Building reliable products across mobile and web.
            </Heading>

            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={{ base: "8", md: "10" }}>
              <Text color="muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.9">
                I am Deepak Dutta, a full-stack JavaScript developer with around 4 years of experience, specialising in React Native for building cross-platform mobile applications on Android and iOS. I have worked on mobile apps such as the Veera Health app, where I developed features like meal review with AI, product modules, and background notifications. I have also contributed to other apps, including a crypto wallet UI and a stealth project with advanced onboarding and reporting flows.
              </Text>
              <Text color="muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.9">
                In addition to mobile, I have built web platforms like Iksana and Sarika Eyewear, focusing on performance and user-friendly design. My work mainly revolves around creating reliable applications and delivering solutions that work smoothly across devices.
              </Text>
            </Grid>

            <Box borderTop="1px solid" borderColor="line" pt="7">
              <Text mb="5" color="muted" fontFamily="mono" fontSize="10px" letterSpacing="0.12em" textTransform="uppercase">
                Open channels
              </Text>
              <Flex gap="3" wrap="wrap">
                {socialLinks.map((social) => (
                  <IconWrapper
                    key={social.label}
                    Icon={social.icon}
                    label={social.label}
                    link={social.link}
                  >
                    {social.name}
                  </IconWrapper>
                ))}
                <IconWrapper
                  Icon={MdEmail}
                  label="Copy Deepak Dutta's email address"
                  onClick={copyToClipboard}
                >
                  Copy email
                </IconWrapper>
              </Flex>
            </Box>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

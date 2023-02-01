import { Button, Link } from "@chakra-ui/react";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
export const imageStyle = {
  bgColor: "gray.400",
  borderRadius: "sm",
  objectFit: "cover",
  boxSize: "100%",
  rounded: "sm",
  transition: "all 0.2s ease-in-out",
};

export const headingContainer = {
  mt: "6",
  spacing: "2",
  borderBottom: "1px",
  borderColor: "gray.300",
  px: "4",
  pb: "2",
};

export const LinkButton = ({ href, children }) => {
  return (
    <Button
      display="flex"
      justifyContent="center"
      alignItems="center"
      leftIcon={<AiOutlineLink size="22" />}
      colorScheme="blue"
      rounded="md"
      _hover={{ textDecor: "none" }}
      fontWeight="semibold"
      as={Link}
      href={href}
      target="_blank"
    >
      {children}
    </Button>
  );
};

export const CodeButton = ({ href, children }) => {
  return (
    <Button
      display="flex"
      justifyContent="center"
      alignItems="center"
      leftIcon={<AiFillGithub size="22" />}
      bg="gray.300"
      rounded="md"
      _hover={{ bg: "gray.400", textDecor: "none" }}
      fontWeight="semibold"
      as={Link}
      href={href}
      target="_blank"
    >
      {children}
    </Button>
  );
};

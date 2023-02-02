import { IconButton, Link } from "@chakra-ui/react";

export const iconButtonStyle = {
  bgColor: "blackAlpha.300",
  rounded: "full",
  _hover: {
    bgColor: "blackAlpha.400",
    textDecoration: "none",
  },
};

export const IconWrapper = ({ link, Icon, ...rest }) => {
  return (
    <IconButton
      aria-label="Social-icon"
      {...iconButtonStyle}
      color="#26203c"
      icon={<Icon />}
      as={Link}
      target="_blank"
      href={link}
      {...rest}
    />
  );
};

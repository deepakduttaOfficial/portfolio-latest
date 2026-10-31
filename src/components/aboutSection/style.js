import { IconButton, Link } from "@chakra-ui/react";

export const IconWrapper = ({ link, Icon, label, ...rest }) => {
  const isLink = Boolean(link);

  return (
    <IconButton
      as={isLink ? Link : "button"}
      href={link}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      aria-label={label}
      icon={<Icon aria-hidden="true" />}
      variant="outline"
      borderColor="ink"
      borderRadius="0"
      color="ink"
      _hover={{ bg: "ink", color: "paper", textDecoration: "none" }}
      _focusVisible={{
        outline: "3px solid",
        outlineColor: "blue.500",
        outlineOffset: "3px",
      }}
      {...rest}
    />
  );
};

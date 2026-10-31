import { Button, Link } from "@chakra-ui/react";

export const IconWrapper = ({ link, Icon, label, children, ...rest }) => {
  const isLink = Boolean(link);

  return (
    <Button
      as={isLink ? Link : "button"}
      href={link}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      aria-label={label}
      leftIcon={<Icon aria-hidden="true" />}
      variant="outline"
      size="md"
      minW="0"
      color="ivory"
      _hover={{ borderColor: "accent", color: "accent", textDecoration: "none" }}
      {...rest}
    >
      {children}
    </Button>
  );
};

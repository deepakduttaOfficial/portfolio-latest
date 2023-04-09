import React from "react";
import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// Import links
import { HOME_LINK, EXTERNAL_PAGE } from "../../utils/links";
import { PrimaryNavLink, SecondaryNavLink } from "./NavLink";

const MobileNav = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        size={"md"}
        icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        aria-label={"Open Menu"}
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        {...props}
      >
        Open Modal
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose} size={["xs", "sm"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            {/* Home page Links */}
            {HOME_LINK.map(({ link, name }, index) => {
              return (
                <PrimaryNavLink key={index} link={link} display="block" my="3">
                  {name}
                </PrimaryNavLink>
              );
            })}
             {/* External page Links */}
            {EXTERNAL_PAGE.map(({ link, name }, index) => {
              return (
                <SecondaryNavLink
                  key={index}
                  link={link}
                  display="block"
                  my="3"
                >
                  {name}
                </SecondaryNavLink>
              );
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileNav;

import {
  Box,
  HStack,
  VStack,
  Image,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const resetFilters = useGameQueryStore((state) => state.resetFilters);
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobileView = useBreakpointValue({ base: true, md: false });

  // Define navbar background color based on light or dark mode
  const navbarBgColor = useColorModeValue("green.300", "green.900");

  const logoHeight = useBreakpointValue({ base: "30px", md: "60px" }); // Adjust height for mobile

  const buttons = [
    { label: "Home", action: resetFilters, to: "/" },
    { label: "Trending", action: () => setSortOrder("-rating"), to: "/" },
    { label: "New Arrival", action: () => setSortOrder("-released"), to: "/" },
    { label: "Contact", to: "/contact-us" },
  ];

  return (
    <>
      {isMobileView ? (
        <>
          <HStack p="10px" justifyContent="space-between" bg={navbarBgColor}>
            <RouterLink to="/">
              <Image
                src={logo}
                alt="Logo"
                height={logoHeight} // Use breakpoint value for height
                objectFit="cover"
                display="block"
              />
            </RouterLink>
            <Box flex="1" maxW="300px" mx="10px">
              {" "}
              {/* Adjusted max width for search bar */}
              <SearchInput />
            </Box>
            <IconButton
              icon={<HamburgerIcon />}
              variant="outline"
              onClick={onOpen}
              aria-label="Open menu"
            />
          </HStack>

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="start" width="100%">
                  {buttons.map(({ label, action, to }) => (
                    <Button
                      key={label}
                      variant="ghost"
                      colorScheme="teal"
                      onClick={() => {
                        action?.();
                        onClose();
                      }}
                      as={RouterLink}
                      to={to}
                      width="100%"
                      textAlign="left"
                    >
                      {label}
                    </Button>
                  ))}
                  <ColorModeSwitch />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <Box bg={navbarBgColor} width="100%" p={3}>
            <VStack spacing={2} width="100%">
              <HStack justifyContent="space-between" width="100%">
                <RouterLink to="/">
                  <Image
                    src={logo}
                    alt="Logo"
                    height="60px" // Keep height for larger screens
                    objectFit="cover"
                  />
                </RouterLink>

                <Box flex="1" maxW="500px" mx="20px">
                  <SearchInput />
                </Box>

                <HStack spacing={4}>
                  <IconButton
                    icon={<FaUserAlt />}
                    aria-label="User Profile"
                    variant="outline"
                    as={RouterLink}
                    to="/profile"
                  />
                  <IconButton
                    icon={<FaShoppingCart />}
                    aria-label="Cart"
                    variant="outline"
                    as={RouterLink}
                    to="/cart"
                  />
                </HStack>
              </HStack>

              <HStack spacing={4} justifyContent="space-between" width="100%">
                <HStack>
                  {buttons.map(({ label, action, to }) => (
                    <Button
                      key={label}
                      variant="ghost"
                      colorScheme="teal"
                      onClick={() => {
                        action?.();
                        onClose();
                      }}
                      as={RouterLink}
                      to={to}
                    >
                      {label}
                    </Button>
                  ))}
                </HStack>
                <ColorModeSwitch />
              </HStack>
            </VStack>
          </Box>
        </>
      )}
    </>
  );
};

export default NavBar;

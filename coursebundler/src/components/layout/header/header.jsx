import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { Link } from "react-router-dom";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = false;
  const user = {
    role: "admin",
  };

  const logoutHandler = () => {
    console.log("logout");
    onClose();
  };

  return (
    <div>
      <IconButton
        onClick={toggleColorMode}
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        position="fixed"
        top="4"
        right="4"
      >
        {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
      </IconButton>

      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width="12"
        height="12"
        rounded="full"
        position="fixed"
        top="6"
        left="6"
        zIndex="10"
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={"blur(2px)"} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">COURSE BUNDLER</DrawerHeader>

          <DrawerBody>
            <VStack spacing="4" alignItems="flex-start">
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="Browse All Courses"
              />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request a Course"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />

              <HStack
                justifyContent="space-evenly"
                position="absolute"
                bottom="2rem"
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile" onClick={onClose}>
                          <Button variant="ghost" colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>
                        <Button variant="ghost" onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === "admin" && (
                        <Link to="/admin/dashboard" onClick={onClose}>
                          <Button colorScheme="purple" variant="ghost">
                            <RiDashboardFill style={{ margin: "4px" }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>

                    <p>OR</p>

                    <Link onClick={onClose} to="/register">
                      <Button colorScheme="yellow">SignUp</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

const LinkButton = ({ url = "/", title = "Home", onClose }) => {
  return (
    <Link to={url} onClick={onClose}>
      <Button variant="ghost">{title}</Button>
    </Link>
  );
};
